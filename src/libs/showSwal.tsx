import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const showSwal = (text: string, icon: any ): void => {
  withReactContent(Swal).fire({
    position: 'bottom-end',
    icon,
    text,
    showConfirmButton: false,
    timer: 2000,
    toast: true,
  })
}

export default showSwal