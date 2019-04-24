import {
  useEffect,
  useState,
} from 'react'

export default function useCarabiner() {
  const [clipboard, setClipboard] = useState('');

  const updateClipboard = (clipboardContent) => {
    navigator.clipboard.writeText(clipboardContent).then(() => {
      setClipboard(clipboardContent);
    });
  }

  useEffect(() => {
    navigator.clipboard.readText().then((clipboardContent) => {
      setClipboard(clipboardContent);
    });
    return () => {}
  }, []);

  return [clipboard, updateClipboard];
}
