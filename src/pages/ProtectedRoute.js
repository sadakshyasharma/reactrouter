import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ children, user }) => {
    if (!user) {
        return <Navigate to='/' />;
    }
      
    return children;
};

export default ProtectedRoute;

// const ProtectedRoute = () => {
//     return <div>ProtectedRoute</div>
// }
// export default ProtectedRoute;