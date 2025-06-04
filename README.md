# Thai multiplication table
Thai multiplication table เป็นแพ็กเกจสำหรับช่วยในการแสดงตารางสูตรคูณภาษาไทยรูปแบบเลขจำนวนเต็มบวก
## _ความสามารถของแพ็กเกจ_
- ส่งผลลัพธ์การคูณในรูปแบบ Array
- แปลงเลขจำนวนเต็มบวกจากตัวเลขอารบิกไปเป็นตัวเลขไทย
## วิธีติดตั้ง
```sh
npm i thai-multiplication-table
```
```sh
pnpm i thai-multiplication-table
```
```sh
bun add thai-multiplication-table
```
#### ฟังก์ชันส่งผลลัพธ์การคูณในรูปแบบ Array
```sh
getTable(multiplicand: number, multiplierStart: number = 1, multiplierEnd: number = 12): string[];
```
#### ฟังก์ชันแปลงเลขจำนวนเต็มบวกจากตัวเลขอารบิกไปเป็นตัวเลขไทย
```sh
toThaiNumber(number: number): string
```