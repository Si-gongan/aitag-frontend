import { WorkType } from '@/types/common';

export default function ExportDatas(exportForm: string, selectedWorks: WorkType[]) {
  const downloadData = [];
  const headers = Object.keys(selectedWorks[0]).join(',');
  downloadData.push(headers);

  selectedWorks.forEach((work) => {
    const values = Object.values(work).join(',');
    downloadData.push(values);
  });

  const downloadContent = downloadData.join('\n');
  const blob = new Blob([downloadContent], { type: `text/${exportForm};charset=utf-8;` });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `selected_works.${exportForm}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
