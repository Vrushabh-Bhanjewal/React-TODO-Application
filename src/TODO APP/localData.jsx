
const localStorageData= "TodoData";

export function getLocalData(){
    const rawData =localStorage.getItem(localStorageData);
    if(!rawData) { return [] }
    return JSON.parse(rawData);
}
export function setLocalData(value){
    localStorage.setItem(localStorageData,JSON.stringify(value))
}