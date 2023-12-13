import {Link, RouteObject, RouterProvider} from "react-router-dom";
import styles from "./styles.module.scss";
import {BrowserRouter, Routes, Route, Router, RouteObject} from "react-router-dom";
import Login from "../../pages/registration/Login";
import React, {Suspense} from "react";

export type NavbarElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function NavbarElement({children, link = undefined, ...props}: NavbarElementProps) {
    const routes: RouteObject[] = [
        {
            path: "/",
            element:  <HomeView />,
            errorElement: <div>future error page from direct components</div>, // todo add from d-c  
        },
        {
            path: "/sign-in",
            element:  <SignInView />,
            errorElement: <div>future error page from direct components</div>, // todo add from d-c
        },
    ]
    const router = createBrowserRouter(routes);
    return (
        <div className={styles.navbar_element}>
                <Router>
                    <Routes>
                        {link && typeof link === "string" ? 
                            <Route path={`/${link}`} element={<Link to={link}>{children}</Link>}/>:
                            <Route path={`/${link}`} element={<a href={`https://${link}`}>{children}</a>}/>}
                    </Routes>
                </Router>
            {/* <Link to={link ?? ""} {...props}>
                {children}
            </Link> */}
            <Suspense fallback={<div>future loader</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
        

    );
}
//routing problems to resolve with good routing i cant get routes correctly and dont know where they should be in main file or here create routees, or make element take in routes as argument


// import React, {Suspense} from "react";
// import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
// import HomeView from "./modules/home/presentation/pages/HomeView";
// import SignInView from "./modules/sign-in/presentation/pages/SignInView";
// import {DContext} from "direct-components";

// function App() {
//     const routes: RouteObject[] = [
//         {
//             path: "/",
//             element:  <HomeView />,
//             errorElement: <div>future error page from direct components</div>, // todo add from d-c  
//         },
//         {
//             path: "/sign-in",
//             element:  <SignInView />,
//             errorElement: <div>future error page from direct components</div>, // todo add from d-c
//         },
//     ];

//     const router = createBrowserRouter(routes);

//     return (
//         <DContext>
//             <Suspense fallback={<div>future loader</div>}>
//                 <RouterProvider router={router} />
//             </Suspense>
//         </DContext>
//     );
// }


// export default App;
