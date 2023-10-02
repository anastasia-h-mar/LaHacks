import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(fileName: string) {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), fileName);
    // console.log(filePath);
    
    // Read the json file
    const jsonDataBytes = await fsPromises.readFile(filePath);
  
    // DEBUG return jsonDataStr ;
  
    // Convert the bytes into a string and then parse that string into a JS object
    const objectData = JSON.parse(jsonDataBytes.toString());
  
    return objectData;
  }