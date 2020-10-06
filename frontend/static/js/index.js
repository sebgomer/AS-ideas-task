import Home from "./views/Home.js";
import Universes from "./views/Universes.js"; 
import Stars from "./views/Stars.js";
import Imprint from "./views/Imprint.js";
import errorPage from "./views/errorPage.js";
import { fetchUniverse } from "./data/universeCall.js";
import { fetchStar } from "./data/starCall.js";

fetchUniverse();
fetchStar(); 

const navigateTo = url => {
    history.pushState(null, null, url); 
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/universes", view: Universes},
        { path: "/stars", view: Stars },
        { path: "/imprint", view: Imprint },
        { path: "/lostInSpace", view: errorPage }
    ];

    const potentialRoutes = routes.map(route => {
        return {
            route: route, 
            isRoute: location.pathname === route.path
        };
    });

    let match = potentialRoutes.find(potentialRoute => potentialRoute.isRoute);

    // could define own 404 here 
    if(!match) {
        match = {
            route: routes[4],
            isRoute: true
        }
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml(); 

};

// listen to browser history
window.addEventListener("popstate", router); 

// when all DOM ist loaded, run this method 
// calling Router 
document.addEventListener("DOMContentLoaded", () => {
    // no page refresh
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault(); 
            navigateTo(e.target.href); 
        } 
        
        // else {
        //     navigateTo(e.target.href); 
        // }
        
        // if (e.target.matches("[universeCall")) {
        //     fetchUniverse(); 
        //     navigateTo(e.target.href); 
        // }  
        
        // if (e.target.matches("[starCall")) {
        //     fetchStar(); 
        //     navigateTo(e.target.href); 
        // }
    })

    router(); 
})