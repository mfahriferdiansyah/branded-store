import { toast } from 'react-toastify';

export default function toastify(text, sign='error') {
  const setup = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    if(sign === 'error') toast.error(text, setup);
    if(sign === 'success') toast.success(text, setup);
}