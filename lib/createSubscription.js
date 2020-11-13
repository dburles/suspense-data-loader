/**
 * The API provided by the useAuthentication hook.
 * @kind typedef
 * @name CreateSubscriptionAPI
 * @type {object}
 * @prop {Function} notify Send an event.
 * @prop {Function} subscribe Subscribe to events.
 */

/**
 * Creates a subscription.
 * @kind function
 * @name createSubscription
 * @returns {CreateSubscriptionAPI} API.
 */
export default function createSubscription() {
  const subscriptions = [];

  /**
   * Subscribes to events.
   * @kind function
   * @name subscribe
   * @param {Function} callback A function to call whenever notify is called.
   * @returns {Function} Unsubscribe.
   */
  function subscribe(callback) {
    subscriptions.push(callback);
    return function unsubscribe() {
      subscriptions.splice(subscriptions.indexOf(callback), 1);
    };
  }

  /**
   * Notifies all subscribers.
   * @kind function
   * @name notify
   * @param {*} [payload] An optional payload.
   */
  function notify(payload) {
    subscriptions.forEach((cb) => {
      cb(payload);
    });
  }

  return {
    notify,
    subscribe,
  };
}
