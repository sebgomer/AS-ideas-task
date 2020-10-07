import Home from "./views/Home.js";
import Universes from "./views/Universes.js"; 
import Stars from "./views/Stars.js";
import Imprint from "./views/Imprint.js";
import errorPage from "./views/errorPage.js";
import { fetchUniverse } from "./data/universeCall.js";
import { fetchStar } from "./data/starCall.js";
// import { universePost } from "./data/universePost";


fetchUniverse();
fetchStar();
// universePost(); 

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

    // Check if route path exists
    const potentialRoutes = routes.map(route => {
        return {
            route: route, 
            isRoute: location.pathname === route.path
        };
    });

    let match = potentialRoutes.find(potentialRoute => potentialRoute.isRoute);

    // Own 404 route
    if(!match) {
        match = {
            route: routes[4],
            isRoute: true
        }
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml(); 

};

// Listen to browser history -> enable backwards navigation
window.addEventListener("popstate", router); 

// When all DOM ist loaded, run this method 
// Calling Router otherwise
document.addEventListener("DOMContentLoaded", () => {
    // No page refresh
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();  
            navigateTo(e.target.href); 
        }

        if (e.target.matches("[universeCall]")) {
            navigateTo(e.target.href);
        }
    })

    router(); 
})

// Trying POST request through <form> element

// router.onload = () => {
//     const universeForm = document.getElementById('universeForm');

//     universeForm.addEventListener('submit', e => {
//         e.preventDefault();

//         const formData = new FormData(this);
//         const searchParams = new URLSearchParams();

//         for (const pair of formData) {
//             searchParams.append(pair[0], pair[1], pair[2]);
//         }

//         fetch('https://happy-stars.herokuapp.com/api/universe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: searchParams
//         })
//             .then(response => {
//                 return response.text();
//             })
//             .then(text => {
//                 console.log(text);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
// }
