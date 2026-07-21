export const handleResumeDownload = (e) => {
  if (e) e.preventDefault();
  
  const resumeUrl = '/resume.pdf';
  
  // Create an invisible anchor tag to trigger real download & open in new tab
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Prakhar_Sethiya_Resume.pdf';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
