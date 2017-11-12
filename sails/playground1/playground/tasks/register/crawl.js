//we need to import sails bc it's part of the environment
var Sails = require('sails')

module.exports = function(grunt) {
  grunt.registerTask('crawl', 'crawl the network and report', function() {
    // it's an async function
    var done = this.async()

    Sails.load(function() {
      // now lets user the crawler service we created in api/services
      var service = new CrawlerService()
      service.crawl()
      console.log('crawled the network from task')
      done()
    })
  })
}
