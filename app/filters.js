module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  //push items in to an array to be used in a nunjucks macro "| push"
  filters.push = (array, item) => {
    array.push(item)
    return array
  }

  //set colours for status "| tagColour"
    filters.tagColour = function(e) {
      if (e == "Inactive") {
        return "govuk-tag--grey"
      } else if (e == "sent") {
        return "govuk-tag--green"
      } else if (e == "something") {
        return "govuk-tag--turquoise"
      } else if (e == "ready") {
        return "govuk-tag--blue"
      } else if (e == "pending") {
        return "govuk-tag--purple"
      } else if (e == "Sent") {
        return "govuk-tag--pink"
      } else if (e == "error") {
        return "govuk-tag--red"
      } else if (e == "Declined") {
        return "govuk-tag--orange"
      } else if (e == "Delayed") {
        return "govuk-tag--yellow"
      } else {
        return ""
      }
    }


  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
