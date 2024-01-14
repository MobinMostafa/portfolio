import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, unexpected error has occur</p>
         <h2><i>{error.statusText || error.message}</i></h2>
    </div>
  )
}

export default ErrorPage