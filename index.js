// Your co
function createEmployeeRecord(array){
  let worker={
    firstName:array[0],
    familytName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutevents:[]
  }
  return worker
}

function createEmployeeRecords(anoArray){
  let array=anoArray.map(ele => createEmployeeRecord(ele))
}

function createTimeInEvent(workerRecord, dataStamp){
  let record={}
  record.type="TimeIn";
  record.hour=parseInt(dataStamp.substring(11));
  record.date=parseInt(dataStamp.substring(0,10));
  workerRecord.timeInEvents.push(record)
  return workerRecord
}

function createTimeOutEvent(workerRecord, dataStamp){
  let record={}
  record.type="TimeOut";
  record.hour=parseInt(dataStamp.substring(11));
  record.date=parseInt(dataStamp.substring(0,10));
  workerRecord.timeOutEvents.push(record)
  return workerRecord
}