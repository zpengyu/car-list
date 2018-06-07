/**
 * Mocking client-server processing
 */
import _cars from './cars.json'

const TIMEOUT = 100

export default {
  getCars: (cb, timeout) => setTimeout(() => cb(_cars), timeout || TIMEOUT)
}
