//=============================================================================
// GameJolt.js
//=============================================================================
/*:
*@plugindesc Use the GameJolt API in your RPG Maker MV game.
*
*@param General settings
*@desc Parameter is only for overview!
*
*@param Game ID
*@parent General settings
*@desc The Game ID of your game. Can be found on the dashboard page of your game, under Game API > API Settings.
*@type number
*
*@param Private Key
*@parent General settings
*@desc The Private Key of your game. Can be found on the dashboard page of your game, under Game API > API Settings.
*@type number
*
*@param Show notifications
*@parent General settings
*@desc Choose when the player shall get a notification.
*@type struct<notifications>
*@default {"all":"true","logging":"false","addTrophy":"false"}
*
*@param Login notification text
*@parent Show notifications
*@desc The text that's shown when a player has been logged in, if allowed.
*@type text
*@default Logged in as
*
*@param Logout notification text
*@parent Show notifications
*@desc The text that's shown when a player has been logged out, if allowed.
*@type text
*@default logged out.
*
*@param Award trophy notification text
*@parent Show notifications
*@desc The text that's shown when a player gets a trophy, if allowed.
*@type text
*@default You got a trophy!
*
*@param Remove trophy notification text
*@parent Show notifications
*@desc The text that's shown when a player loses a trophy, if allowed.
*@type text
*@default You've lost a trophy...
*
*@param Login on start
*@desc Whether you want to ask the player to log in to GameJolt before starting the game if (s)he isn't already logged in.
*@type boolean
*@on Yes
*@off No
*@default true
*
*@param Add button to main menu
*@desc Whether you want to add a button to the main menu allowing the player to log in and out of GameJolt.
*@type boolean
*@on Yes
*@off No
*@default true
*
*@param Highscore settings and info
*@desc You may use escape characters like in message windows. E.g: \n[1] Inserts the name of the first actor.
*
*@param Header
*@parent Highscore settings and info
*@desc The text which shall appear on the top of the highscorelist.
*@type text
*@default Rank:   Name:                                  Points:
*
*@param Different colours
*@parent Highscore settings and info
*@desc Add each number of the systemcolour which should be used in the highscorelist (0-31) or add true to use each colour.
*@type text
*@default true
*
*@param Maximum scores
*@parent Highscore settings and info
*@desc Sets the maximum ammount of scores you want to get.
*@type number
*@min 1
*@max 100
*@default 10
*
*@param Fetch only better scores
*@parent Highscore settings and info
*@desc Only scores which are better than this score value will be returned. Leave blank if you don't want this behavior.
*@type number
*
*@param Fetch only worse scores
*@parent Highscore settings and info
*@desc Only scores which are worse than this score value will be returned. Leave blank if you don't want this behavior.
*@type number
*
*@param Guestname
*@parent Highscore settings and info
*@desc The name which shall be used for posting guestscores.
*@type text
*@default \n[1]
*
*@param Guestmarking
*@parent Highscore settings and info
*@desc The text which shall be added to the name for guestscores.
*@type text
*@default (Guest)
*
*@param Score identifier
*@parent Highscore settings and info
*@desc The text which shall be added to the score.
*@type text
*@default Points
*
*@param Score value
*@parent Highscore settings and info
*@desc The gamevariable which contains the score to be posted.
*@type variable
*
*@param Extra data
*@parent Highscore settings and info
*@desc Some extra data for the scores. This data is not visible on the game's site.
*@type text
*
*@param Tablesettings
*@parent Highscore settings and info
*@desc Set the parameters for each Table. Insert "-Standard-" to use the parameters from above.
*@type struct<scoretables>[]
*@default ["{\"id\":\"123456\",\"guestname\":\"\\\\n[2]\",\"guestmarking\":\"(Guest)\",\"score\":\"Points\",\"sort\":\"1\",\"extraData\":\"Posting ok\",\"header\":\"This is an example! Delet it or just don't use it.\",\"colours\":\"true\",\"limit\":\"-Standard-\",\"betterThan\":\"-Standard-\",\"worseThan\":\"-Standard-\"}"]
*
*@author Florian van Strien, BreakerZero, Mr. Fu
*
*@help *GameJolt API plugin for RPG Maker MV*
*By Florian van Strien
*Compatibility fork by BreakerZero
*Renewed version by Mr. Fu
*
*This plugin can be used to add the GameJolt API to your RPG Maker MV game and
*it is easy to use.
*
*The following functions of the GameJolt API are provided:
*- Fetch userdata of the active user
*- Full trophy support (adding, fetching, removing)
*- Full highscore support (adding, fetching, get rank, get tableinfo)
*
*------------------------------------------------------------------------------
*
*Start by filling in the Parameters in the plugin manager. The most important
*parameters are the Game ID and Private Key. They can be found on the dashboard
*page of your game. From the main Dashboard page, go to the Game API tab. Then
*click on "API Settings" to the left. The Game ID and Private Key should be
*shown there. Copy them to the plugin parameters.
*
*There are some optional options you can set here as well. If you have no idea
*what you should choose, the default options should work fine.
*
*- Show notifications
*You can choose, in which cases notifications shall be shown.
*
*- Login notification text
*This is the text that's shown as the header of the notification when a player
*has been logged in. The default text is "Logged in as".
*
*- Logout notification text
*This is the text that's shown as the message of the notification when a player
*has been logged out. The default text is "logged out.".
*
*- Award trophy notification text
*This is the text that's shown as the header of the notification when a player
*gets a trophy. The default text is "You got a trophy!".
*
*- Remove trophy notification text
*This is the text that's shown as the header of the notification when a player
*loses a trophy. The default text is "You've lost a trophy...".
*
*- Login on start
*If this is true, users will be asked to log in as soon as they start the game
*if they aren't already logged in. You can set this to false if you don't like
*this behaviour.
*
*- Add button to main menu
*If this is true, a button will be added to the main menu to let the user log
*in and out of GameJolt. Please note that this button may be automatically
*hidden if the user is already logged in in some specific situations for user
*experience reasons.
*
*- Highscore settings and info
*The highscorelists can be manipulated with the parameters listed below this
*parameter. There is one example at the parameter 'Tablesettings'.
*
*After you've entered these parameters, sessions will work automatically! This
*means you will be able to see how many logged-in people play your game and for
*how long on the Dashboard page of your game. Also, a text will be shown on
*user's profiles while they're playing your game.
*
*------------------------------------------------------------------------------
*
*You can now use the following plugin commands:
*
*GameJolt active user
*Returns public data of the user logged in. This data is saved as:
*$gameTemp.GJactiveUser
*You may now use this data wherever you want. For example in menus or messages.
*
*Following data is provided (use $gameTemp.GJactiveUser in front of the dots):
*- .id                       - The ID of the user.
*- .type                     - The type of the user on gamejolt.com. It can be
*                              'User', 'Developer', 'Moderator' or
*                              'Administrator'.
*- .username                 - The user's username.
*- .avatar_url               - The URL of the user's avatar.
*- .signed_up                - How long ago the user signed up.
*- .signed_up_timestamp      - The timestamp (in seconds) of when the user
*                              signed up.
*- .last_logged_in           - How long ago the user was last logged in. Will
*                              be 'Online Now' if the user is currently online.
*- .last_logged_in_timestamp - The timestamp (in seconds) of when the user was
*                              last logged in.
*- .status                   - 'Active' if the user is still a member of the
*                              site. 'Banned' if (s)he's been banned.
*- .developer_name           - The user's display name.
*- .developer_website        - The user's website (or "" if not specified).
*- .developer_description    - The user's profile markdown description.
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt award trophy <id>
*Awards the trophy with the given ID.
*For example: GameJolt award trophy 43627
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt fetch trophies (not achieved <id>)
*Returns data of your game's trophies according to the user logged in and the
*given arguments. You don't have to pass the arguments after "trophies". In
*this case, this command will return all trophies. If you pass arguments, this
*command will return only trophies matching to these arguments. That means
*trophies which are achieved or not achieved by the player or a trophy with the
*given ID.
*For example:
*GameJolt fetch trophies              - Returns all trophies
*GameJolt fetch trophies achieved     - Returns all achieved trophies
*GameJolt fetch trophies not achieved - Returns all not achieved trophies
*GameJolt fetch trophies 123456       - Returns one specific trophy
*
*This data is saved as:
*$gameTemp.GJTrophies
*You may now use this data wherever you want. For example in menus or messages.
*Following data is provided (use $gameTemp.GJTrophies[i] in front of the dots.
*'i' has to be replaced by the index of the list, which starts with 0):
*- .id          - The ID of the trophy.
*- .title       - The title of the trophy on the site.
*- .description - The trophy description text.
*- .difficulty  - Bronze, Silver, Gold, or Platinum.
*- .image_url   - The URL of the trophy's thumbnail image.
*- .achieved    - Date/time when the trophy was achieved by the user, or false
*                 if (s)he hasn't achieved it yet.
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt remove trophy <id>
*Removes the trophy with the given ID.
*For example: GameJolt remove trophy 43627
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt add score # <index>
*Adds a score according to the tablesettings. Index is the number of the table
*in the list. It's not the table's ID.
*For example: GameJolt add score # 1
*
*GameJolt add score (id <id> identifier <string> value <variableID>
*                    data <string> name <string>)
*Adds a score according to the given arguments. You don't have to pass the
*arguments after "score". The respective standard parameter will be used for
*every argument that was not passed, except for "id". If "id" was not passed,
*your primary scoretable will be used.
*For example: GameJolt add score id 123456 identifier Points value 1
*             data extra verification name Your best Guest
*
*Explanation of the arguments:
*- id         - The ID of the scoretable. You will find it on your dashboard.
*- identifier - Text, which is shown behind the scorevalue on the scoretable.
*- value      - The ID of the gamevariable in which the value is stored.
*- data       - Text, which is only visible for the developer.
*- name       - The name which is shown on the scoretable for guestscoring.
*
*You may combine these plugincommands, if you want to post scores according to
*a tablesetting with modifications.
*For example: GameJolt add score # 1 value 9 data specific score
*- In that case, all parameters of the first table will be taken except of the
*  score value and the extra data. These parameters will be taken from the
*  plugin command.
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt fetch scores # <index>
*Returns a list of scores and the original data according to the tablesettings.
*Index is the number of the table in the list. It's not the table's ID. See
*below, how to get the data.
*For example: GameJolt fetch scores # 1
*
*GameJolt fetch scores (id <id> limit <number> better <number> worse <number>
*                       name <string> user)
*Returns a list of scores and the original data according to the given
*arguments. You don't have to pass the arguments after "scores". The respective
*standard parameter will be used for every argument that was not passed, except
*for "id". If "id" was not passed, your primary scoretable will be used.
*For example:
*GameJolt fetch scores
*- Returns the primary scoretable
*GameJolt fetch scores id 123456 limit 5 better 500
*- Returns five scores wich are nearest to and better than 500 of the given
*  table
*GameJolt fetch scores id 123456 user
*- Returns all scores of the user logged in or of the standard guestname, if no
*  user is logged in.
*GameJolt fetch scores id 123456 name Your best guest
*- Returns all scores of the specified guestname.
*
*Explanation of the arguments:
*- id     - The ID of the scoretable. You will find it on your dashboard.
*- limit  - The maximum ammount of scores in the list. According to the
*           GameJolt API, the maximum of scores per request is 100.
*- better - You will get only scores which are nearest to and better than this
*           value.
*- worse  - You will get only scores which are nearest to and worse than this
*           value. If "better" is given, this argument won't work.
*- name   - You will get only scores of the guest specified.
*- user   - You will get only scores of the user logged in or of the standard
*           guestname, if no user is logged in. If "name" is given, you don't
*           have to pass this argument.
*
*You may combine these plugincommands, if you want to fetch scores according to
*a tablesetting with modifications.
*For example: GameJolt fetch scores # 1 limit 50 better 1000
*- In that case, all parameters of the first table will be taken except of
*  "Maximum scores" and "Only better scores". These parameters will be taken
*  from the plugin command.
*
*The list is saved as:
*$gameTemp.GJScoreList
*The list uses the header and colours which are specified at the tablesettings
*or the standard header and colours. The list is divided into three columns. At
*first the rank, at second the name and at third the score. The entries in the
*list will have the same distance from one another as the entries in the
*header, if available.
*
*The data is saved as:
*$gameTemp.GJScores
*You may now use this data wherever you want. For example in menus or messages.
*Following data is provided (use $gameTemp.GJScores[i] in front of the dots.
*'i' has to be replaced by the index of the list, which starts with 0):
*- .score            - The score value and identifier.
*- .sort             - The score's numerical value.
*- .extra_data       - Any extra data associated with the score.
*- .user             - If this is a user score, this is the display name for
*                      the user.
*- .user_id          - If this is a user score, this is the user's ID.
*- .guest            - If this is a guest score, this is the guest's submitted
*                      name.
*- .stored           - Returns when the score was logged by the user.
*- .stored_timestamp - Returns the timestamp (in seconds) of when the score was
*                      logged by the user.
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt rank # <index>
*Returns a rank according to the tablesettings. The parameters "ID" and "Score
*value" are used. This function is searching for the given score and returns
*the rank which is nearest to the score. Index is the number of the table in
*the list. It's not the table's ID.
*For example: GameJolt rank # 1
*
*GameJolt rank (value <variableID> id <id>)
*Returns a rank according to the given arguments. You don't have to pass the
*argument after "rank". The respective standard parameter will be used for the
*argument "value". If "id" was not passed, your primary scoretable will be
*used.
*For example: GameJolt rank value 4 id 123456
*
*You may combine these plugincommands.
*
*The rank is saved as:
*$gameTemp.GJRank
*
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*
*GameJolt tables
*Returns information about all tables of the game. This function will not
*return the scores!
*
*The data is saved as:
*$gameTemp.GJTables
*You may now use this data wherever you want. For example in menus or messages.
*Following data is provided (use $gameTemp.GJTables[i] in front of the dots.
*'i' has to be replaced by the index of the list, which starts with 0):
*- .id          - The ID of the score table.
*- .name        - The developer-defined name of the score table.
*- .description - The developer-defined description of the score table.
*- .primary     - Whether or not this is the default score table. (1 if it is,
*                 0 if not)
*
*------------------------------------------------------------------------------
*
*You can also use some scriptcalls. NOTE: The scriptcalls won't take values out
*of the standard parameters!
*
*GameJolt.startLoginFlow();
*This command logs the user in manually.
*
*GameJolt.getActiveUser();
*Returns the user data according to the plugin command 'GameJolt active user'.
*
*GameJolt.logout();
*This command logs the user out manually.
*
*GameJolt.awardTrophy(id);
*Awards the trophy with the given ID.
*
*GameJolt.hasTrophy(id);
*This returns whether the current user has the trophy with the specified ID.
*
*GameJolt.returnTrophies(argument);
*This returns data of trophies. Pass true to get only achieved trophies, false
*to get only not achieved trophies or an ID to get a specified trophy. Pass no
*arguments to get all trophies. Note the description at the plugin command
*'GameJolt fetch trophies'.
*
*GameJolt.GameJolt.removeTrophy(id);
*Removes the trophy with the given ID.
*
*GameJolt.postScore(tableID, identifier, value, extraData, guestname);
*Adds a score to a specific scoretable. If you don't want to pass an argument,
*pass "" instead of leaving it blank. Note the description at the plugin
*command 'GameJolt add score'. The only difference is that the value here is
*the actual value, not an ID of a gamevariable.
*
*GameJolt.returnScore(limit, tableID, specificUser, guestname, betterThan,
*                     worseThan, header, colour);
*Returns a list of scores and the data therefor. If you don't want to pass an
*argument, pass "" instead of leaving it blank. Note the description at the
*plugin command 'GameJolt fetch scores'.
*Explanation of the arguments:
*- limit, tableID, betterThan and worseThan have to be numbers.
*- specificUser has to be true or false.
*- guestname and header have to be text.
*- colour has to be an array including the numbers of the systemcolours which
*  shall be used to highlight the lines.
*
*GameJolt.getRank(tableID, value);
*Returns a rank of a specific table according to the given score value. You may
*pass 0 as the tableID to use your primary scoretable. Note the description at
*the plugin command 'GameJolt rank'. The argument "value" is the actual value,
*not an ID of a gamevariable.
*
*GameJolt.getTables();
*Returns information about all tables of the game. Note the description at the
*plugin command 'GameJolt tables'
*
*==============================================================================
*Terms of Use
*==============================================================================
*All following terms have to be observed!
*Florian van Strien: https://gamejolt.com/x/permalink/forum-post/70410
*Mr. Fu: This plugin is free for use with credits (Mr. Fu) in
*            non-commercial and commercial projects as well.
*
*Contact: Mr. Fu on www.rpgmaker-mv.de - https://rpgmaker-mv.de/user/319-mr-fu/
*==============================================================================
*Changelog
*==============================================================================
*Version 0.1.0:
*- Initial release version
*
*Version 0.1.1:
*- Added trophy verification
*
*Version 0.1.2:
*- Forked update and final state of the plugin
*- Implements a minor change removing the login dialog option to accommodate
*  interpretation changes by the RMMV 1.6 versions
*
*Version 0.1.3:
*- Minor change to highlight functionality that allows for on-demand login.
*
*Version 0.2.0: 04.04.2021
*- Update on description and parameters
*- Changed the login process so that it is executed via a new window to prevent
*  the game from restarting. This means that the login process can also be
*  executed during the game.
*- Implemented notifications for login and logout
*- Fixed a gamebreaking bug at the notifications
*- Implemented fetching and removing trophies
*- Implemented highscores
*/
/*~struct~notifications:
*@param all
*@text All
*@desc If this is set to true, you may ignore all further parameters in this list.
*@type boolean
*@on Yes
*@off No
*@default true
*
*@param logging
*@text Log in and out
*@desc Show a notification when the player has been logged in or out.
*@type boolean
*@on Yes
*@off No
*@default false
*
*@param addTrophy
*@text Trophy
*@desc Show a notification when the player awards or loses a trophy.
*@type boolean
*@on Yes
*@off No
*@default false
*/
/*~struct~scoretables:
*@param id
*@text ID
*@desc The ID of the specific table. (-Standard- won't work)
*@type number
*
*@param guestname
*@text Guestname
*@desc The name which shall be used for posting guestscores.
*@type text
*@default -Standard-
*
*@param guestmarking
*@text Guestmarking
*@desc The text which shall be added to the name for guestscores.
*@type text
*@default -Standard-
*
*@param score
*@text Score identifier
*@desc The text which shall be added to the score.
*@type text
*@default -Standard-
*
*@param sort
*@text Score value
*@desc The gamevariable which contains the score to be posted.
*@type variable
*@default -Standard-
*
*@param extraData
*@text Extra data
*@desc Some extra data for the scores. This data is not visible on the game's site.
*@type text
*@default -Standard-
*
*@param header
*@text Header
*@desc The text which shall appear on the top of the highscorelist.
*@type text
*@default -Standard-
*
*@param colours
*@text Different colours
*@desc Add each number of the systemcolour which should be used in the highscorelist (0-31) or add true to use each colour.
*@type text
*@default -Standard-
*
*@param limit
*@text Maximum scores
*@desc Sets the maximum ammount of scores you want to get.
*@type number
*@min 1
*@max 100
*@default -Standard-
*
*@param betterThan
*@text Only better scores
*@desc Only scores which are better than this score value will be returned. Leave blank if you don't want this behavior.
*@type number
*@default -Standard-
*
*@param worseThan
*@text Only worse scores
*@desc Only scores which are worse than this score value will be returned. Leave blank if you don't want this behavior.
*@type number
*@default -Standard-
*/

//GameJolt object
var GameJolt = {};

function GameJoltBase() //And boom, everything is out of the global namespace.
{
	// Function to get readable parameters
	function parseParameters(params) {
		var obj;
		try {
			obj = JsonEx.parse(params && typeof params === 'object' ? JsonEx.stringify(params) : params);
		} catch (e) {
					return params;
		}
		if (obj && typeof obj === 'object') {
			Object.keys(obj).forEach(function (key) {
				obj[key] = parseParameters(obj[key]); 
				// If the parameter has no value, meaning it's an empty string, just set it to null
				if (obj[key] === '') {
					obj[key] = null;
				}
			});
		}
		return obj;
	}

	//Values
	var base_uri = "https://api.gamejolt.com/api/game/v1_2/";
	var parameters = parseParameters(PluginManager.parameters("GameJolt"));
	var shouldAskLogin = parameters["Login on start"];
	var gameID = parameters["Game ID"];
	var privateKey = parameters["Private Key"];
	var useMainMenuButton = parameters["Add button to main menu"];
	var canLogOutOnGameJolt = false;
	var useNotifications = parameters["Show notifications"];
	var allNotifications = useNotifications.all, loggingNotification = useNotifications.logging, addTropyNotification = useNotifications.addTrophy;
	var loginText = parameters["Login notification text"], logoutText = parameters["Logout notification text"], trophyNotificationText = parameters["Award trophy notification text"], trophyNotificationTextRemove = parameters["Remove trophy notification text"]
	var never_redirect = false;
	var current_login_window = null;
	var notificationLayer = null, notificationLayerReferenceCount = 0;
	var standardGuestname = parameters["Guestname"] + " " + parameters["Guestmarking"];
	var standardHighscoreHeader = parameters["Header"];
	var standardHighscoreColours = getColourList(String(parameters["Different colours"]));
	var standardScoreLimit = parameters["Maximum scores"];
	var standardBetterThan = parameters["Fetch only better than"];
	var standardWorseThan = parameters["Fetch only worse than"];
	var standardScore = parameters["Score identifier"];
	var standardSort = parameters["Score value"];
	var standardExtraDataHighscore = parameters["Extra data"];
	var tables = parameters["Tablesettings"];
	for (var i = 0; i < tables.length; i++) {
		if(tables[i].colours === "-Standard-"){
			tables[i].colours = standardHighscoreColours;
		}else{
			tables[i].colours = getColourList(tables[i].colours);
		}
	}

	//Vars
	var loggedIn = false, loggingIn = false, username = "", usertoken = "";
	var activeUser = null;
	var shouldHaveOpenSession = false;
	var onlineTrophies = [];

	//GameTemp
	var gtinit = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
		gtinit.call(this);
		this.GJScoreList = undefined;
		this.GJScores = undefined;
		this.GJactiveUser = null;
		this.GJTrophies = [];
		this.GJRank = undefined;
		this.GJTables = undefined;
	};

	//Handle plugin commands
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args)
	{
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command.toLowerCase() === 'gamejolt')
		{
			for (var i = 0; i < args.length; i++) {
				switch(args[i].toLowerCase()){
					case "achieved" :
					case "active" :
					case "add" :
					case "award" :
					case "better" :
					case "data" :
					case "fetch" :
					case "id" :
					case "identifier" :
					case "limit" :
					case "name" :
					case "not" :
					case "rank" :
					case "remove" :
					case "score" :
					case "scores" :
					case "tables" :
					case "trophies" :
					case "trophy" :
					case "user" :
					case "value" :
					case "worse" : args[i] = args[i].toLowerCase();
				}
			}
			if (args.length >= 0)
			{
				if (args[0] == "award")
				{
					if (args.length >= 1 && args[1] == "trophy")
					{
						if (args.length >= 2)
						{
							GameJolt.awardTrophy(args[2]);
						}
					}
				}else if (args[0] == "add")
				{
					if (args.length >= 1 && args[1] == "score")
					{
						var tableID = 0, score = standardScore, sort = standardSort, extraData = standardExtraDataHighscore, guestname = standardGuestname, guestmarking = "";
						var index = args.indexOf("#");
						if(index !== -1){
							index = Number(args[index+1]) - 1;
							if(tables[index] != undefined){
								var table = tables[index];
								tableID = table.id;
								score = checkStandard(score, table.score);
								sort = checkStandard(sort, table.sort);
								extraData = checkStandard(extraData, table.extraData);
								guestname = checkStandard(guestname, table.guestname);
								if(guestname !== standardGuestname){
									guestmarking = checkStandard(guestmarking, table.guestmarking);
								}
								guestname += guestmarking;
							}
						}
						tableID = getScoreParams(tableID, "id", args);
						score = getScoreParams(score, "identifier", args, ["value", "id", "data", "name"]);
						sort = getScoreParams(sort, "value", args);
						extraData = getScoreParams(extraData, "data", args, ["value", "id", "identifier", "name"]);
						guestname = getScoreParams(guestname, "name", args, ["value", "id", "data", "identifier"]);
						sort = $gameVariables.value(sort);
						GameJolt.postScore(tableID, score, sort, extraData, guestname);
					}
				}
				else if (args[0] == "active")
				{
					if (args.length >= 1 && args[1] == "user")
					{
						GameJolt.getActiveUser();
					}
				}
				else if (args[0] == "fetch")
				{
					if (args.length >= 1 && args[1] == "trophies")
					{
						if(args.includes("achieved")){
							if(args.includes("not")){
								GameJolt.returnTrophies(false);
							}else{
								GameJolt.returnTrophies(true);
							}
						}else if(args[2]){
							GameJolt.returnTrophies(args[2]);
						}else{
							GameJolt.returnTrophies();
						}
					}else if (args.length >= 1 && args[1] == "scores")
					{
						var tableID = 0, limit = standardScoreLimit, betterThan = standardBetterThan, worseThan = standardWorseThan, guestname = standardGuestname, guestmarking = "", header = standardHighscoreHeader, colour = standardHighscoreColours;
						var specificUser = false;
						var index = args.indexOf("#");
						if(index !== -1){
							index = Number(args[index+1]) - 1;
							if(tables[index] != undefined){
								var table = tables[index];
								tableID = table.id;
								limit = checkStandard(limit, table.limit);
								betterThan = checkStandard(betterThan, table.betterThan);
								worseThan = checkStandard(worseThan, table.worseThan);
								guestname = checkStandard(guestname, table.guestname);
								if(guestname !== standardGuestname){
									guestmarking = checkStandard(guestmarking, table.guestmarking);
								}
								guestname += guestmarking;
								header = checkStandard(header, table.header);
								colour = checkStandard(colour, table.colours);
							}
						}
						tableID = getScoreParams(tableID, "id", args);
						limit = getScoreParams(limit, "limit", args);
						betterThan = getScoreParams(betterThan, "better", args);
						if(index === -1 && !args.includes("better")){
							betterThan = null;
						}
						worseThan = getScoreParams(worseThan, "worse", args);
						if(index === -1 && !args.includes("worse")){
							worseThan = null;
						}
						guestname = getScoreParams(guestname, "name", args, ["id", "limit", "better", "worse"]);
						if(args.indexOf("user") !== -1 || args.indexOf("name") !== -1){
							specificUser = true;
						}
						GameJolt.returnScore(limit, tableID, specificUser, guestname, betterThan, worseThan, header, colour);
					}
				}
				else if (args[0] == "rank")
				{
					var tableID = 0, sort = standardSort;
					var index = args.indexOf("#");
					if(index !== -1){
						index = Number(args[index+1]) - 1;
						if(tables[index] != undefined){
							var table = tables[index];
							tableID = table.id;
							sort = checkStandard(sort, table.sort);
						}
					}
					tableID = getScoreParams(tableID, "id", args);
					sort = getScoreParams(sort, "value", args);
					sort = $gameVariables.value(sort);
					GameJolt.getRank(tableID, sort);
				}
				else if (args[0] == "remove")
				{
					if (args.length >= 1 && args[1] == "trophy")
					{
						if (args.length >= 2)
						{
							GameJolt.removeTrophy(args[2]);
						}
					}
				}
				else if (args[0] == "tables")
				{
					GameJolt.getTables();
				}
			}
		}
	};

	//Main menu button
	if (useMainMenuButton)
	{
		function getMainMenuButtonText()
		{
			if (loggingIn)
				return "Connecting GameJolt ";
			else if (loggedIn)
				return "GameJolt Logout ";
			else
				return "GameJolt Login";
		}

		function updateMainMenuButtonText()
		{
			if (current_main_menu_window != null)
			{
				if (typeof current_main_menu_window._commandWindow != "undefined")
				{
					var list = current_main_menu_window._commandWindow._list;
					for (var i = 0; i < list.length; i++)
					{
						if (list[i].symbol == "gamejolt")
						{
							list[i].name = getMainMenuButtonText();
							current_main_menu_window._commandWindow.refresh();
						}
					}
				}
			}
		}

		//GameJolt main menu button handler
		var commandGameJolt = function()
		{
			if (! loggedIn)
			{
				if (current_login_window != null)
				{
					current_login_window.focus();
				}
				else if (! loggingIn)
				{
					never_redirect = false;
					GameJolt.startLoginFlow();
				}
			}
			else if (! loggingIn)
			{
				//Log off
				GameJolt.logout();
			}
			current_main_menu_window._commandWindow.activate();
		}

		var current_main_menu_window = null;

		//Add GameJolt button to main menu
		var _Window_TitleCommand_prototype_initialize = Window_TitleCommand.prototype.initialize;
		Window_TitleCommand.prototype.initialize = function()
		{
			_Window_TitleCommand_prototype_initialize.call(this);
			this.setHandler('gamejolt', commandGameJolt); //Add handler
		}

		var _Window_TitleCommand_prototype_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
		Window_TitleCommand.prototype.makeCommandList = function()
		{
			_Window_TitleCommand_prototype_makeCommandList.call(this);
			if (useMainMenuButton)
				this.addCommand(getMainMenuButtonText(), 'gamejolt'); //Add button
		}

		var _Scene_Title_prototype_createCommandWindow = Scene_Title.prototype.createCommandWindow;
		Scene_Title.prototype.createCommandWindow = function()
		{
			current_main_menu_window = this; //Get 'this' for later use
			_Scene_Title_prototype_createCommandWindow.call(this);
		}
	}

	//Init
	GameJolt.init = function()
	{
		if (! GameJolt.autoLogin()) //Try to login
		{
			if (shouldAskLogin)
			{
				GameJolt.startLoginFlow();
			}
		}
		if(!localStorage.getItem("GJOfflineScore")){
			localStorage.setItem("GJOfflineScore", "");
		}
		if(!localStorage.getItem("GJTrophiesToRemove")){
			localStorage.setItem("GJTrophiesToRemove", "");
		}
		GameJolt.syncScores();
	}

	//Start the login flow. This will show a login window.
	GameJolt.startLoginFlow = function()
	{
			GameJolt.loginRedirect(); //Redirect to another web page to log in
	}

	GameJolt.loginRedirect = function()
	{
		if (never_redirect) return;

		try
		{
			var loginWindow = open("", "Game Jolt login");
			loginWindow.location.href = "js/plugins/GameJoltLogin.html?p=" + (window.btoa("is_window=true" + "&gameid=" + gameID + "&private_key=" + privateKey).replace(/=/g, "~"));
		}
		catch (error)
		{
			console.error("We couldn't redirect the user to the login screen. Error: " + error);
		}
	}

	GameJolt.login = function(uname, utoken)
	//Login to GameJolt with the given username and token
	{
		if (useMainMenuButton) updateMainMenuButtonText();
		loggingIn = true;
		doGJRequest("users/auth", "&username=" + uname + "&user_token=" + utoken,
			function(response)
			{
				username = uname;
				usertoken = utoken;
				loggedIn = true;
				loggingIn = false;
				doGJRequest("users/", "&username=" + username,
					function(response){
						activeUser = response.users[0];
						//Shows a login message if allowed
						if (checkNotification(loggingNotification)){
							showNotification(loginText, activeUser.username, activeUser.avatar_url);
						}
					})

				function handleSession()
				{
					if (! loggedIn) return;

					//Function to handle opening a new session.
					function openNewSession()
					{
						GameJolt.openSession(
							function()
							{
								shouldHaveOpenSession = true;
								setTimeout(handleSession, 30000);
							},
							function()
							{
								shouldHaveOpenSession = false;
								setTimeout(handleSession, 60000); //Everything failed. Set a larger timeout to avoid flooding.
							});
					}

					if (shouldHaveOpenSession)
					{
						GameJolt.pingSession(
							function()
							{
								GameJolt.syncScores();
								setTimeout(handleSession, 30000);
							},
							function()
							{
								openNewSession();
							});
					}
					else
						openNewSession();
				};

				//Open a session and sync the trophies.
				handleSession();
				GameJolt.syncTrophies();

				//Update the text on the main menu
				if (useMainMenuButton) updateMainMenuButtonText();

				//Save login data
				localStorage.setItem("StoredPlayerUserName", username);
				localStorage.setItem("StoredPlayerToken", usertoken);
			},
			function(error)
			{
				console.error("We couldn't log the player in automatically. Error: " + error);
				loggingIn = false;
				if (useMainMenuButton) updateMainMenuButtonText();
			});
	}

	//Log off
	GameJolt.logout = function()
	{
		loggedIn = false;
		loggingIn = false;
		username = "";
		usertoken = "";
		//Shows a logout message if allowed
		if (checkNotification(loggingNotification)){
			showNotification(activeUser.username, logoutText, activeUser.avatar_url);
		}
		activeUser = null;
		GameJolt.getActiveUser();
		//Clear local storage data
		localStorage.setItem("StoredPlayerUserName", "");
		localStorage.setItem("StoredPlayerToken", "");
		if (useMainMenuButton) updateMainMenuButtonText();
	}

	//Open a new session
	GameJolt.openSession = function(callback, callback_error)
	{
		doGJRequest("sessions/open", getUserData(),
			function(response)
			{
				callback();
			},
			function(error)
			{
				console.error("We couldn't open a session. Error: " + error);
				callback_error();
			});
	}

	//Ping the current session
	GameJolt.pingSession = function(callback, callback_error)
	{
		doGJRequest("sessions/ping", getUserData(),
			function(response)
			{
				callback();
			},
			function(error)
			{
				console.error("We couldn't ping the session. Error: " + error);
				callback_error();
			});
	}

	//Returns the active user or null
	GameJolt.getActiveUser = function(){
		$gameTemp.GJactiveUser = activeUser;
	}

	//Award a trophy
	GameJolt.awardTrophy = function(id)
	{
		//Add the trophy
		var localTrophies = getLocalTrophies();
		if (localTrophies.indexOf(id) <= -1)
		{
			localTrophies.push(id);
			setLocalTrophies(localTrophies);

			//Sync the trophies to the backend
			GameJolt.syncTrophies();
		}
	}

	//Returns data of trophies
	GameJolt.returnTrophies = function(arg){
		var paramString = "";
		if(arg == undefined){
			arg = "";
		}else{
			if(typeof arg === "boolean"){
				paramString = "&achieved=";
			}else{
				paramString = "&trophy_id=";
			}
		}
		doGJRequest("trophies/", getUserData() + paramString + arg,
			function(response)
			{
				$gameTemp.GJTrophies = response.trophies;
			},
			function(error)
			{
				$gameTemp.GJTrophies = [];
				console.error(error)
			});
	}

	//Returns if the user has a certain trophy
	GameJolt.hasTrophy = function(id)
	{
		var localTrophies = getLocalTrophies();
		if (localTrophies.indexOf(id + "") <= -1)
		{
			//We don't have the trophy stored locally. But we may still have it online.
			return (onlineTrophies.indexOf(id + "") > -1);
		}
		else
			return true;
	}

	//Removes a trophy
	GameJolt.removeTrophy = function(id)
	{
		var localTrophies = getLocalTrophies();
		console.log(localTrophies)
		var index = onlineTrophies.indexOf(id);
		var remove = false;
		if (index !== -1)
		{
			onlineTrophies.splice(index, 1);
			remove = true;
		}
		index = localTrophies.indexOf(id);
		if (index !== -1)
		{
			localTrophies.splice(index, 1);
			setLocalTrophies(localTrophies);
			remove = true;
		}
		if(remove){
			removingTrophy(id);
		}

	}

	//Reach a highscore
	GameJolt.postScore = function(table_id, score, sort, extraData, guest)
	{
		var userString = getUserData(guest);
		var uri = "&score=" + sort + " " + Window_Base.prototype.convertEscapeCharacters(score);
		uri += "&sort=" + sort;
		if(extraData){
			uri += "&extra_data=" + Window_Base.prototype.convertEscapeCharacters(extraData);
		}
		if(table_id !== 0 && table_id !== ""){
			uri += "&table_id=" + table_id;
		}
		doGJRequest("scores/add/", userString + uri,
			function(response)
			{
				// Score has been posted!
			},
			function(error)
			{
				console.error("Score couldn't be posted. Error: " + error);
				var offlineUser = "";
				if(username){
					offlineUser = "User|" + username;
				}else{
					offlineUser = "Guest|" + Window_Base.prototype.convertEscapeCharacters(guest);
				}
				localStorage.setItem("GJOfflineScore", localStorage.getItem("GJOfflineScore") + offlineUser + "|" + uri + "|");
			});

	}

	//Returns scorelist
	GameJolt.returnScore = function(limit, table_id, onlyUser, guest, betterThan, worseThan, header, colours)
	{
		$gameTemp.GJScoreList = undefined;
		$gameTemp.GJScores = undefined;
		var uri = "";
		if(limit){
			uri = "&limit=" + limit;
		}
		if(table_id !== 0 && table_id !== ""){
			uri += "&table_id=" + table_id;
		}
		if(onlyUser){
			uri += getUserData(guest);
		}
		if(betterThan){
			uri += "&better_than=" + betterThan;
		}else if(worseThan){
			uri += "&worse_than=" + worseThan;
		}
		doGJRequest("scores/", uri,
			function(response)
			{
				$gameTemp.GJScores = response.scores;
				var GJScoreList = header;
				header = Window_Base.prototype.convertEscapeCharacters(header);
				var end = calcSpace(0, header);
				var end2 = calcSpace(end[1], header);
				for (var i = 0; i < $gameTemp.GJScores.length; i++) {
					GJScoreList += "\n";
					if(colours.length !== 0){
						for (var a = i; a >= colours.length; a - colours.length) {}
						GJScoreList += "\\c[" + colours[a] + "]";
					}
					var user = $gameTemp.GJScores[i].user;
					var guest = $gameTemp.GJScores[i].guest;
					var score = $gameTemp.GJScores[i].sort;
					GJScoreList += formatRank(i+1) + getSpaceAfterUser("000", end[0]);
					if(user !== ""){
						GJScoreList += user + getSpaceAfterUser(user, end2[0]);

					}else{
						GJScoreList += guest + getSpaceAfterUser(guest, end2[0]);
					}
					GJScoreList += score;
				}
				$gameTemp.GJScoreList = GJScoreList;
			},
			function(error)
			{
				$gameTemp.GJScoreList = "Scorelist couldn't be returned. Error:\n" + error;
				$gameTemp.GJScores = [];
				console.error($gameTemp.GJScoreList);
			});
	}

	//Returns rank
	GameJolt.getRank = function(table_id, sort){
		$gameTemp.GJRank = undefined;
		var uri = "&sort=" + sort;
		if(table_id !== 0 && table_id !== ""){
			uri += "&table_id=" + table_id;
		}
		doGJRequest("scores/get-rank/", uri,
			function(response)
			{
				$gameTemp.GJRank = response.rank;
			},
			function(error)
			{
				console.error("Rank couldn't be returned. Error: " + error);
				$gameTemp.GJRank = error;
			});
	}

	//Returns all tables
	GameJolt.getTables = function(){
		$gameTemp.GJTables = undefined;
		doGJRequest("scores/tables/", "",
			function(response)
			{
				$gameTemp.GJTables = response.tables;
			},
			function(error)
			{
				console.error("Tables couldn't be returned. Error: " + error);
				$gameTemp.GJTables = error;
			});
	}

	//Sync the trophy data
	GameJolt.syncTrophies = function()
	{
		if (! loggedIn) return;
		if(localStorage.getItem("GJTrophiesToRemove")){
			var removingTrophies = getTrophiesToRemove();
			for (var i = 0; i < removingTrophies.length; i++) {
				removingTrophy(removingTrophies[i]);
			}
		}
		doGJRequest("trophies", getUserData(),
			function(response)
			{
				onlineTrophies = []; //Reset online trophies

				var localTrophies = getLocalTrophies();

				var serverTrophies = response["trophies"];

				for (var i = 0; i < serverTrophies.length; i++)
				{
					var trophy = serverTrophies[i];
					var trophyID = trophy["id"];

					//If we've achieved the trophy locally but not on the server.
					if (trophy["achieved"] == "false" && localTrophies.indexOf(trophyID) > -1)
					{
						addTrophy(trophyID);

						//Show a trophy message if allowed
						if (checkNotification(addTropyNotification))
							showNotification(trophyNotificationText, trophy["title"], trophy["image_url"]);
					}
					else if (trophy["achieved"] !== "false")
					{
						onlineTrophies.push(trophyID); //Add this trophy to the online trophies
					}
				}
			},
			function(error)
			{
				console.error("We couldn't sync trophies. Error: " + error);
			});
	}

	//Sync the score data
	GameJolt.syncScores = function(){
		if(!localStorage.getItem("GJOfflineScore")){return}
		var scoreData = localStorage.getItem("GJOfflineScore").split("|");
		localStorage.setItem("GJOfflineScore", "");
		scoreData.pop();
		for (var i = 0; i < scoreData.length; i+=3) {
			if(scoreData[i] === "User"){
				postOlderScores(false, scoreData[i+1], scoreData[i+2]);
			}else{
				postOlderScores(true, scoreData[i+1], scoreData[i+2]);
			}
		}
	}

	//Try to login automatically
	GameJolt.autoLogin = function()
	{
		try
		{
			if (typeof window.location.search == 'string')
			{
				docURLParameters = window.location.search.replace("?", "");
				if (docURLParameters != "")
				{
					var docURLParameterList = docURLParameters.split("&");
					//Check for "encoded" params
					//This uses base64, which means it isn't secure at all, but at least these parameters
					//aren't directly visisble in the URI. Using actual encryption makes no sense, as people
					//can just view the source anyway.
					for (var i = 0; i < docURLParameterList.length; i++)
					{
						var parameterValue = docURLParameterList[i].split("=");
						if (parameterValue[0] == "p")
						{
							docURLParameterList = window.atob(parameterValue[1].replace(/~/g, "=")).split("&");
						}
					}

					for (var i = 0; i < docURLParameterList.length; ++i)
					{
						var parameterValue = docURLParameterList[i].split("=");
						if (parameterValue[0] == "gjapi_username")
							username = parameterValue[1];
						else if (parameterValue[0] == "gjapi_token")
							usertoken = parameterValue[1];
						else if (parameterValue[0] == "never_redirect")
							never_redirect = (parameterValue[1] == "true");
					}

					if (username != "" && usertoken != "")
					{
						GameJolt.login(username, usertoken);
						if (never_redirect == false && ! canLogOutOnGameJolt)
							useMainMenuButton = false;
						return true; //Yes, we at least had some sort of info about the player.
					}
				}
			}
		}
		catch (error)
		{
			console.error("Something went wrong: " + error);
		}

		//Check if we have any stored played info
		var storedUName = localStorage.getItem("StoredPlayerUserName");
		if (storedUName != null && storedUName != "")
		{
			var storedUToken = localStorage.getItem("StoredPlayerToken");
			if (storedUToken != null)
			{
				GameJolt.login(storedUName, storedUToken);
				return true;
			}
		}

		return false; //No, we didn't have any info about the player.
	}

	function getUserData(guest) //Gets user data to use in requests.
	{
		if(loggedIn){
			return "&username=" + username + "&user_token=" + usertoken;
		}else if(guest){
			return "&guest=" + Window_Base.prototype.convertEscapeCharacters(guest);
		}else {
			return "";
		}
	}

	//Checks if notifications ar allowed
	function checkNotification(bool){
		if(allNotifications || bool){
			return true;
		}
		return false;
	}

	//Get the local trophies from the local storage
	function getLocalTrophies()
	{
		//Get the local trophies of the user
		var localTrophies = "";
		if(username){
			localTrophies = localStorage.getItem("GJTrophies" + username);
		}
		if (localTrophies == null)
			localTrophies = "";
		//Get the unclaimed local trophies
		var localTrophiesUnclaimed = localStorage.getItem("GJTrophies");
		if (localTrophiesUnclaimed != null)
		{
			//Add the unclaimed trophies to the trophies
			if(localTrophies !== ""){
				localTrophies += "|"
			}
			localTrophies += localTrophiesUnclaimed;
			//Claim them if we're logged in
			if (loggedIn)
			{
				setLocalTrophies(localTrophies);
				localStorage.removeItem("GJTrophies");
			}
		}
		if(localTrophies === ""){
			return [];
		}
		return localTrophies.split("|");
	}

	//Save the local trophies to the local storage
	function setLocalTrophies(trophyList)
	{
		try
		{
			if (loggedIn){
				localStorage.setItem("GJTrophies" + username, trophyList.join("|")); //Save trophies with username
			}
			else{
				localStorage.setItem("GJTrophies", trophyList.join("|")); //Save trophies as unclaimed
			}
		}
		catch (error)
		{
			console.error("We couldn't set the trophy data! Error: " + error);
		}
	}

	function addTrophy(id)
	{
		if (! loggedIn) return;

		doGJRequest("trophies/add-achieved", getUserData() + "&trophy_id=" + id,
			function(response)
			{
				//Trophy added!
			},
			function(error)
			{
				console.error("We couldn't add the trophy! Error: " + error);
			});
	}

	function removingTrophy(id){
		if(!loggedIn){
			setTrophyToRemove(id);
		}else{
			doGJRequest("trophies/", getUserData() + "&trophy_id=" + id,
				function(response)
				{
					var trophy = response.trophies[0];
					doGJRequest("trophies/remove-achieved/", getUserData() + "&trophy_id=" + id,
						function(response)
						{
							//Show a trophy message if allowed
							if (checkNotification(addTropyNotification)){
								showNotification(trophyNotificationTextRemove, trophy["title"], trophy["image_url"]);
							}
							removeTrophyToRemove(id);
						},
						function(error)
						{
							console.error(error);
							setTrophyToRemove(id);
						});
				},
				function(error)
				{
					console.error(error)
				});
		}
	}

	function setTrophyToRemove(id){
		var removingTrophies = getTrophiesToRemove();
		if(!removingTrophies.includes(id)){
			localStorage.setItem("GJTrophiesToRemove", localStorage.getItem("GJTrophiesToRemove") + id + "|");
		}
	}

	function removeTrophyToRemove(id){
		var removingTrophies = getTrophiesToRemove();
		console.log(removingTrophies)
		var index = removingTrophies.indexOf(id);
		console.log(index)
		if(index !== -1){
			removingTrophies.splice(index, 1);
			console.log(removingTrophies)
		}
		if(removingTrophies.length !== 0){
			localStorage.setItem("GJTrophiesToRemove", removingTrophies.join("|"));
		}else{
			localStorage.setItem("GJTrophiesToRemove", "");
		}
	}

	function getTrophiesToRemove(){
		var removingTrophies = localStorage.getItem("GJTrophiesToRemove").split("|");
		console.log(removingTrophies)
		removingTrophies.pop();
		console.log(removingTrophies)
		return removingTrophies;
	}

	//Try to post older highscores
	function postOlderScores(guest, user, uri)
	{
		var userData = "";
		if(guest){
			userData = "&guest=" + user;
		}else if(username === user){
			userData = "&username=" + username + "&user_token=" + usertoken;
		}else{
			localStorage.setItem("GJOfflineScore", localStorage.getItem("GJOfflineScore") + "User|" + user + "|" + uri + "|");
			return;
		}
		doGJRequest("scores/add/", userData + uri,
			function(response)
			{
				// Score has been posted!
			},
			function(error)
			{
				console.error("Score couldn't be posted. Error: " + error);
				var offlineUser = "";
				if(guest){
					offlineUser = "Guest|" + user;
				}else{
					offlineUser = "User|" + user;
				}
				localStorage.setItem("GJOfflineScore", localStorage.getItem("GJOfflineScore") + offlineUser + "|" + uri + "|");
			});

	}

	//Converts systemcolour
	function getColourList(list){
		if(list === "true" || list === true){
			list = [];
			for (var i = 0; i < 32; i++) {
				list.push(i);
			}
		}else if(list !== ""){
			list = list.split(" ");
		}else{
			list = [];
		}
		return list;
	}

	//Handles standardmarkings on highscoretables
	function checkStandard(old, New){
		if(New === "-Standard-"){
			return old;
		}
		return New;
	}

	//Sets score params for adding
	function getScoreParams(old, id, list, till){
		var index = list.indexOf(id);
		if(index !== -1){
			var newIndex = index + 1;
			if(till){
				var until = 0;
				var possibleUntils = [];
				for (var i = 0; i < till.length; i++) {
					until = list.indexOf(till[i]);
					if(until > newIndex){
						possibleUntils.push(until);
					}
				}
				if(possibleUntils.length === 0){
					until = list.length
				}else{
					possibleUntils.sort(sortNumber);
					until = possibleUntils[0];
				}
				if(until > newIndex){
					return list.slice(newIndex, until).join(" ");
				}
			}
			return list[newIndex];
		}else{
			return old;
		}
	}

	function sortNumber(a,b) {
	    return a - b;
	}

	//Utility functions:
	function doGJRequest(request_uri, parameter_string, callback, callback_error)
	{
		var full_uri = base_uri + request_uri + "?game_id=" + gameID + parameter_string + "&format=json";
		full_uri += "&signature=" + sha1(full_uri + privateKey);
		console.log(full_uri);

		httpGet(full_uri,
			//Callback when the request succeeded
			function(response)
			{
				//Try to parse the JSON
				try
				{
					var result = JSON.parse(response);
				}
				catch (err)
				{
					callback_error("Invalid response JSON!");
					return;
				}
				var gj_response = result["response"];

				var success = gj_response["success"];

				if (success == "true")
					callback(gj_response);
				else
				{
					if (gj_response["message"] != null)
						callback_error(gj_response["message"]);
					else
						callback_error("An unknown error occurred!");
				}
			},
			//Callback when it failed
			function()
			{
				callback_error("HTTP error!");
			});
	}

	//Do a HTTP request.
	function httpGet(uri, callback, callback_error)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function()
	    { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	        else if (xmlHttp.readyState == 4 & callback_error != null)
	        	callback_error();
	    }
	    xmlHttp.open("GET", uri, true);
	    xmlHttp.send(null);
	}

	//Notifications for trophies!
	function createNotificationLayer()
	{
		notificationLayerReferenceCount++;
		if (notificationLayer == null)
		{
			notificationLayer = document.createElement("div");
			notificationLayer.id = "GJnotificationLayer";
			notificationLayer.width = Graphics._width;
			notificationLayer.height = Graphics._height;
			notificationLayer.style.zIndex = 100;
			notificationLayer.style.overflow = "hidden";
			Graphics._centerElement(notificationLayer);
			document.body.appendChild(notificationLayer);
		}
	}

	function destroyNotificationLayer()
	{
		notificationLayerReferenceCount--;
		if (notificationLayer != null && notificationLayerReferenceCount <= 0)
		{
			notificationLayer.parentElement.removeChild(notificationLayer);
			notificationLayer = null;
		}
	}

	function showNotification(title, message, image_url)
	{
		createNotificationLayer();

		//Create notification base
		var notification = document.createElement("div");
		notification.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		notification.style.margin = "10px";
		notification.style.width = "";
		notification.style.display = "inline-block";
		notification.style.clear = "both";
		notification.style.float = "left";
		notification.style.transition = "opacity 0.5s linear";
		notification.style.opacity = "0";
		notification.style.boxSizing = "margin-box";
		notificationLayer.appendChild(notification);

		//The image
		var notificationImg = document.createElement("img");
		notificationImg.src = image_url;
		notificationImg.style.padding = "10px 5px 10px 6px";
		notificationImg.alt = "Trophy image";
		notificationImg.style.width = "calc(2.5em + 15px)";
		notificationImg.style.height = "calc(2.5em + 15px)";
		notificationImg.style.display = "block";
		notificationImg.style.verticalAlign = "bottom";
		notificationImg.style.float = "left";
		notification.appendChild(notificationImg);

		//The div for texts
		var notificationTextDiv = document.createElement("div");
		notificationTextDiv.style.display = "inline-block";
		notification.appendChild(notificationTextDiv);

		//The header
		var notificationTitle = document.createElement("p");
		notificationTitle.innerHTML = title;
		notificationTitle.style.padding = "10px 10px 3px 5px";
		notificationTitle.style.margin = "0px";
		notificationTitle.style.fontSize = "1em";
		notificationTitle.style.fontFamily = "Arial, sans-serif";
		notificationTitle.style.color = "white";
		notificationTitle.style.display = "inline-block";
		notificationTitle.style.float = "left";
		notificationTextDiv.appendChild(notificationTitle);

		//The text
		var notificationMessage = document.createElement("p");
		notificationMessage.innerHTML = message;
		notificationMessage.style.padding = "3px 10px 6px 5px";
		notificationMessage.style.margin = "0px";
		notificationMessage.style.fontSize = "1.5em";
		notificationMessage.style.fontFamily = "Arial, sans-serif";
		notificationMessage.style.color = "white";
		notificationMessage.style.display = "inline-block";
		notificationMessage.style.clear = "both";
		notificationMessage.style.float = "left";
		notificationTextDiv.appendChild(notificationMessage);

		//Show after a short while (otherwise the animation wouldn't work)
		window.setTimeout(
			function()
			{
				notification.style.opacity = "1";
				//And hide the trophy after a while
				window.setTimeout(
					function()
					{
						notification.style.opacity = "0";
						window.setTimeout(
							function()
							{
								notificationLayer.removeChild(notification);
								destroyNotificationLayer();
							}, 500);
					}, 8000);
			}, 30);
	}

	function formatRank(rank){
		if(rank >= 1 && rank <= 9){
			return "00" + rank;
		}else if(rank >=10 && rank <=99){
			return "0" + rank;
		}else{
			return rank;
		}
	}

	function getSpaceAfterUser(user, end){
		var space = "";
		for (var i = 0; i < end-user.length; i++) {
			space += " ";
		}
		return space;
	}

	function calcSpace(start, text){
		var space = false;
		var escParam = false;
		var end = -1;
		for (var i = start; i < text.length; i++) {
			if(text.charCodeAt(i) === 27 && text.charAt(i+2) === "["){
				escParam = true;
			}
			if(escParam){
				if(text[i] === "]"){
					escParam = false;
				}
			}else{
				end++;
			}
			if(text[i] === " " && !space){
				space = true;
			}
			if(space && text[i] !== " "){
				break;
			}
		}
		return [end, i];
	}

	//SHA1 from php.js (https://github.com/kvz/phpjs):

	/*
	Copyright:
	Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) 
	and Contributors (http://phpjs.org/authors)

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is furnished to do
	so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/

	function sha1(r){var e,o,a,t,c,h,n,f,s,u=function(r,e){var o=r<<e|r>>>32-e;return o},C=function(r){var e,o,a="";for(e=7;e>=0;e--)o=r>>>4*e&15,a+=o.toString(16);return a},d=new Array(80),A=1732584193,p=4023233417,i=2562383102,g=271733878,v=3285377520;r=unescape(encodeURIComponent(r));var b=r.length,k=[];for(o=0;b-3>o;o+=4)a=r.charCodeAt(o)<<24|r.charCodeAt(o+1)<<16|r.charCodeAt(o+2)<<8|r.charCodeAt(o+3),k.push(a);switch(b%4){case 0:o=2147483648;break;case 1:o=r.charCodeAt(b-1)<<24|8388608;break;case 2:o=r.charCodeAt(b-2)<<24|r.charCodeAt(b-1)<<16|32768;break;case 3:o=r.charCodeAt(b-3)<<24|r.charCodeAt(b-2)<<16|r.charCodeAt(b-1)<<8|128}for(k.push(o);k.length%16!=14;)k.push(0);for(k.push(b>>>29),k.push(b<<3&4294967295),e=0;e<k.length;e+=16){for(o=0;16>o;o++)d[o]=k[e+o];for(o=16;79>=o;o++)d[o]=u(d[o-3]^d[o-8]^d[o-14]^d[o-16],1);for(t=A,c=p,h=i,n=g,f=v,o=0;19>=o;o++)s=u(t,5)+(c&h|~c&n)+f+d[o]+1518500249&4294967295,f=n,n=h,h=u(c,30),c=t,t=s;for(o=20;39>=o;o++)s=u(t,5)+(c^h^n)+f+d[o]+1859775393&4294967295,f=n,n=h,h=u(c,30),c=t,t=s;for(o=40;59>=o;o++)s=u(t,5)+(c&h|c&n|h&n)+f+d[o]+2400959708&4294967295,f=n,n=h,h=u(c,30),c=t,t=s;for(o=60;79>=o;o++)s=u(t,5)+(c^h^n)+f+d[o]+3395469782&4294967295,f=n,n=h,h=u(c,30),c=t,t=s;A=A+t&4294967295,p=p+c&4294967295,i=i+h&4294967295,g=g+n&4294967295,v=v+f&4294967295}return s=C(A)+C(p)+C(i)+C(g)+C(v),s.toLowerCase()}
}

GameJoltBase(); //Call base function.
GameJolt.init(); //Call init function