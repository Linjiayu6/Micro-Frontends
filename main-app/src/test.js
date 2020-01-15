
let domEl;

export function bootstrap(props) {
    return Promise
        .resolve()
        .then(() => {
            domEl = document.createElement('h2');
            domEl.id = 'single-spa-application:test.js';
            document.body.appendChild(domEl);

            console.log('bootstrap')
        });
}
export function mount(props) {
    return Promise
        .resolve()
        .then(() => {
            // This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
            domEl.textContent = 'main-app/src/test.js is mounted!'
            console.log('mount')
        });
}
export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            // This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
            domEl.textContent = '';
            console.log('unmount')
        })
}