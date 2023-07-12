import React, { useEffect, useState } from 'react';
import * as ExcelJS from 'exceljs';
import { Route, Routes } from 'react-router-dom';

interface Props {
  file: File | null;
}

function ExcelTable({ file }: Props) {
  const [data, setData] = useState<any[][]>([]);

  useEffect(() => {
    if (file) {
      const readFile = async () => {
        const workbook = new ExcelJS.Workbook();
        const fileReader = new FileReader();

        fileReader.onload = async (event) => {
          if (event.target && event.target.result) {
            const buffer = event.target.result as ArrayBuffer;
            const uint8Array = new Uint8Array(buffer);

            await workbook.xlsx.load(uint8Array);
            const worksheet = workbook.worksheets[0];
            const rows = worksheet.getSheetValues() as any[][];

            setData(rows);
          }
        };

        fileReader.readAsArrayBuffer(file);
      };

      readFile();
    }
  }, [file]);

  return (
    <div>
      <h1>Tabla</h1>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelTable;
