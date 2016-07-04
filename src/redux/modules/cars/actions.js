import Config from '../../../config'

export function create() {

}

export function update() {

}

export function get() {

}

export function all() {
  fetch(Config.CarsUrl)
    .then(response => response.json())
    .then(response => console.log(response))
}
