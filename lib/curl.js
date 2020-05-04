var command_parser = require('./command_parser');

var commands = module.exports = {
  curl_commands: function (commands) {
    return command_parser.filter_commands(commands, 'curl');
  },

  
  // check that a curl command has --fail
  curl_hasfail: function (curlCommand) {
    return command_parser.command_has_flag(curlCommand, '-f') || command_parser.command_has_flag(curlCommand, '--fail');
  },

  // check that an curl command uses a secure connection
  curl_is_secure: function (curlCommand) {
    return curlCommand.match(/https:\/\//g) !== null;
  }
}
