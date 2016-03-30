var codeListId;
var memTable;
var stackTable;
var storageTable;
var callstackTable;
var currentAddress;
var vmTrace;

function init(_trace, _codeListid, _memTable, _stackTable, _storageTable, _callstackTable){
	vmTrace = _trace
	var currentCode = vmTrace.codes[vmTrace.vmtrace[0].address]
	currentAddress = vmTrace.vmtrace[0].address
	$.each(currentCode, function(key, value) {
		$(_codeListid).append($("<option>" + this + "</option>"));
	});
	$(_codeListid).prop("selectedIndex", vmTrace.codesmap[currentAddress][vmTrace.vmtrace[0].pc])
	currentSelected = 0;
	codeListId = _codeListid
	memTable = _memTable
	stackTable = _stackTable
	storageTable = _storageTable
	callstackTable = _callstackTable
	updateContext()
}

function updateContext()
{
	console.log(vmTrace.vmtrace[currentSelected])
	// Memory Dump
	memoryValue = vmTrace.vmtrace[currentSelected].memory;
	if (memoryValue) {
		$(memTable).html("")
		var memLine = formatMemory(memoryValue, 16)
		$.each(memLine, function(key, value) {
			$(memTable).append("<tr><td>" + this.address +"</td><td>" + this.content.ascii + "</td><td>" + this.content.raw + "</td></tr>")
		});
	};

	// Stack
	$(stackTable).html("");
	var stackContent = vmTrace.vmtrace[currentSelected].stack;
	stackContent.reverse();
	$.each(stackContent, function(key, value) {
		$(stackTable).append("<tr><td>" + value + "</td></tr>");
	});

	// Storage
	$(storageTable).html("")
	var storageContent = vmTrace.vmtrace[currentSelected].storage;
	if (storageContent) {
		$.each(storageContent, function(key, value) {
			$(storageTable).append("<tr><td>" + key + "    " + value + "</td></tr>");
		});
	}

	// Call Stack
	$(callstackTable).html("")
	var callstack = vmTrace.vmtrace[currentSelected].callstack;
	if (callstack) {
		$.each(callstack, function(key, value) {
			$(callstackTable).append("<tr><td>" + key + "    " + value + "</td></tr>");
		});
	}

	$("#currentstep").html("")
	$("#addingmemory").html("")
	$("#stepcost").html("")
	$("#gasspent").html("")
	$("#currentstep").html(vmTrace.vmtrace[currentSelected].steps)
	$("#addingmemory").html(vmTrace.vmtrace[currentSelected].memexpand)
	$("#stepcost").html(vmTrace.vmtrace[currentSelected].gascost)
	$("#gasspent").html(vmTrace.vmtrace[0].gas - vmTrace.vmtrace[currentSelected].gas)
}

function formatMemory(mem, width)
{
	var ret = []
	for (var k = 0; k < mem.length; k += (width * 2))
	{
		var memory = mem.substr(k, width * 2)
		ret.push({
			address: web3.toHex(k),
			content: tryAsciiFormat(memory)
		})
	}
	return ret
}

function tryAsciiFormat(memorySlot)
{
	var ret = { ascii: "", raw: "" }
	for (var k = 0; k < memorySlot.length; k += 2)
	{
		var raw = memorySlot.substr(k, 2)
		var dec = web3.toDecimal("0x" + raw)
		if (dec >= 32 && dec < 127)
			ret.ascii += web3.toAscii(raw)
		else
			ret.ascii += "?"
		ret.raw += " " + raw
	}
	return ret
}

var currentSelected;
function stepIntoBack()
{
	moveSelection(-1)
}

function stepOverBack()
{
	if (isReturnInstruction(currentSelected - 1))
		stepOutBack();
	else
		moveSelection(-1);
}

function stepOverForward()
{
	if (isCallInstruction(currentSelected))
		stepOutForward();
	else
		moveSelection(1);
}

function stepIntoForward()
{
	moveSelection(1)
}

function stepOverBack()
{
	if (isReturnInstruction(currentSelected - 1))
		stepOutBack();
	else
		moveSelection(-1);
}

function stepOverForward()
{
	if (isCallInstruction(currentSelected))
		stepOutForward();
	else
		moveSelection(1);
}

function isCallInstruction(index)
{
	return false
	var state = vmTrace.vmtrace[index];
	return state.instname === "CALL" || state.instname === "CREATE";
}

function isReturnInstruction(index)
{
	return false
	var state = vmTrace.vmtrace[index];
	return state.instname === "RETURN"
}

function stepOutBack()
{
	var i = currentSelected - 1;
	var depth = 0;
	while (--i >= 0) {
		if (isCallInstruction(i))
			if (depth == 0)
				break;
			else depth--;
		else if (isReturnInstruction(i))
			depth++;
	}
	selectState(i);
}

function stepOutForward()
{
	var i = currentSelected;
	var depth = 0;
	while (++i < vmTrace.vmtrace.length) {
		if (isReturnInstruction(i))
			if (depth == 0)
				break;
			else
				depth--;
		else if (isCallInstruction(i))
			depth++;
	}
	selectState(i + 1);
}

function moveSelection(incr)
{
	selectState(currentSelected + incr)
}

function selectState(index)
{
	var newIndex = vmTrace.codesmap[currentAddress][vmTrace.vmtrace[index].pc]
	console.log("newIndex " + index + " " + newIndex)
	$(codeListId).prop("selectedIndex", newIndex)
	currentSelected = index
	if (vmTrace.vmtrace[index].address && currentAddress !== vmTrace.vmtrace[index].address)
		currentAddress = mTrace.vmtrace[index].address
	updateContext()
}
