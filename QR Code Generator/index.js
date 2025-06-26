import fs from 'fs';
import {input} from '@inquirer/prompts'
import qr from 'qr-image';

const answer = await input({message:'Enter the URL you want to turn in a QR'});
const qr_svg = qr.image(answer, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qr1.png'));

fs.appendFile("URL.txt", "\n"+answer,(err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
})
