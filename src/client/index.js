import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


// Export these two JavaScript files into the Client Library,
// then it's going to be the part of the Client library
export {
    checkForName,
    handleSubmit
}