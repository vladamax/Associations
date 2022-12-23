import swal from "sweetalert2";

export function useFlash(title, message='', type) {
  function flash(title, message, type) {
    return swal.fire(title, message, type);
  }
  return { flash };
}
