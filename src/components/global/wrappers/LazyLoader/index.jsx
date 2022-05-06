import { Suspense } from "react/cjs/react.production.min"
import Fallback from "./Fallback";

const LazyLoader = ({children}) => {
    return (
        
        <Suspense fallback={<Fallback/>}>
            {children}
        </Suspense>
    )
    
}

export default LazyLoader;