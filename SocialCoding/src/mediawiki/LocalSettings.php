<?php
# This file was automatically generated by the MediaWiki 1.20.3
# installer. If you make manual changes, please keep track in case you
# need to recreate them later.
#
# See includes/DefaultSettings.php for all configurable settings
# and their default values, but don't forget to make changes in _this_
# file, not there.
#
# Further documentation for configuration settings may be found at:
# http://www.mediawiki.org/wiki/Manual:Configuration_settings

# Protect against web entry
if ( !defined( 'MEDIAWIKI' ) ) {
	exit;
}

## Uncomment this to disable output compression
# $wgDisableOutputCompression = true;

$wgSitename      = "SocialCoding";

## The URL base path to the directory containing the wiki;
## defaults for all runtime URL paths are based off of this.
## For more information on customizing the URLs
## (like /w/index.php/Page_title to /wiki/Page_title) please see:
## http://www.mediawiki.org/wiki/Manual:Short_URL
$wgScriptPath       = "/socialWiki";
$wgScriptExtension  = ".php";

## The protocol and server name to use in fully-qualified URLs
$wgServer           = "http://localhost";

## The relative URL path to the skins directory
$wgStylePath        = "$wgScriptPath/skins";

## The relative URL path to the logo.  Make sure you change this from the default,
## or else you'll overwrite your logo when you upgrade!
$wgLogo             = "$wgStylePath/common/images/wiki.png";

## UPO means: this is also a user preference option

$wgEnableEmail      = true;
$wgEnableUserEmail  = true; # UPO

$wgEmergencyContact = "apache@localhost";
$wgPasswordSender   = "apache@localhost";

$wgEnotifUserTalk      = false; # UPO
$wgEnotifWatchlist     = false; # UPO
$wgEmailAuthentication = true;

## Database settings
$wgDBtype           = "mysql";
$wgDBserver         = "localhost";
$wgDBname           = "socialwiki";
$wgDBuser           = "root";
$wgDBpassword       = "";

# MySQL specific settings
$wgDBprefix         = "social";

# MySQL table options to use during installation or update
$wgDBTableOptions   = "ENGINE=InnoDB, DEFAULT CHARSET=utf8";

# Experimental charset support for MySQL 5.0.
$wgDBmysql5 = false;

## Shared memory settings
$wgMainCacheType    = CACHE_NONE;
$wgMemCachedServers = array();

## To enable image uploads, make sure the 'images' directory
## is writable, then set this to true:
$wgEnableUploads  = false;
#$wgUseImageMagick = true;
#$wgImageMagickConvertCommand = "/usr/bin/convert";

# InstantCommons allows wiki to use images from http://commons.wikimedia.org
$wgUseInstantCommons  = false;

## If you use ImageMagick (or any other shell command) on a
## Linux server, this will need to be set to the name of an
## available UTF-8 locale
$wgShellLocale = "en_US.utf8";

## If you want to use image uploads under safe mode,
## create the directories images/archive, images/thumb and
## images/temp, and make them all writable. Then uncomment
## this, if it's not already uncommented:
#$wgHashedUploadDirectory = false;

## Set $wgCacheDirectory to a writable directory on the web server
## to make your wiki go slightly faster. The directory should not
## be publically accessible from the web.
#$wgCacheDirectory = "$IP/cache";

# Site language code, should be one of the list in ./languages/Names.php
$wgLanguageCode = "en";

$wgSecretKey = "590176e55d659399001d80afcbff80d3cff522a8fa3ab8077370c759fde160c2";

# Site upgrade key. Must be set to a string (default provided) to turn on the
# web installer while LocalSettings.php is in place
$wgUpgradeKey = "93fb5ff6a6f15664";

## Default skin: you can change the default skin. Use the internal symbolic
## names, ie 'standard', 'nostalgia', 'cologneblue', 'monobook', 'vector':
$wgDefaultSkin = "vector";

## For attaching licensing metadata to pages, and displaying an
## appropriate copyright notice / icon. GNU Free Documentation
## License and Creative Commons licenses are supported so far.
$wgRightsPage = ""; # Set to the title of a wiki page that describes your license/copyright
$wgRightsUrl  = "";
$wgRightsText = "";
$wgRightsIcon = "";

# Path to the GNU diff3 utility. Used for conflict resolution.
$wgDiff3 = "";

# Query string length limit for ResourceLoader. You should only set this if
# your web server has a query string length limit (then set it to that limit),
# or if you have suhosin.get.max_value_length set in php.ini (then set it to
# that value)
$wgResourceLoaderMaxQueryLength = -1;



# End of automatically generated settings.
# Add more configuration options below.
require_once( "$IP/extensions/geshi/geshi.php" );
require_once("$IP/extensions/SyntaxHighlight_GeSHi/SyntaxHighlight_GeSHi.php");
##########################################
###### permissions #######################
##########################################

$wgGroupPermissions['*']['createaccount']    = true;
$wgGroupPermissions['*']['read']             = true;
$wgGroupPermissions['*']['edit']             = true;
$wgGroupPermissions['*']['createpage']       = true;
$wgGroupPermissions['*']['createtalk']       = true;
$wgGroupPermissions['*']['writeapi']         = true;
//$wgGroupPermissions['*']['patrolmarks']      = false; // let anons see what was patrolled
 
// Implicit group for all logged-in accounts
$wgGroupPermissions['*']['move']             = true;
$wgGroupPermissions['*']['move-subpages']    = true;
$wgGroupPermissions['*']['move-rootuserpages'] = true; // can move root userpages
//$wgGroupPermissions['*']['movefile']         = true;       // Disabled for now due to possible bugs and security concerns
$wgGroupPermissions['*']['read']             = true;
$wgGroupPermissions['*']['edit']             = true;
$wgGroupPermissions['*']['createpage']       = true;
$wgGroupPermissions['*']['createtalk']       = true;
$wgGroupPermissions['*']['writeapi']         = true;
$wgGroupPermissions['*']['upload']           = true;
$wgGroupPermissions['*']['reupload']         = true;
$wgGroupPermissions['*']['reupload-shared']  = true;
$wgGroupPermissions['*']['minoredit']        = true;
$wgGroupPermissions['*']['purge']            = true; // can use ?action=purge without clicking "ok"
$wgGroupPermissions['*']['sendemail']        = true;
 
// Implicit group for accounts that pass $wgAutoConfirmAge
$wgGroupPermissions['*']['autoconfirmed'] = true;
 
// Users with bot privilege can have their edits hidden
// from various log pages by default
$wgGroupPermissions['*']['*']              = true;
$wgGroupPermissions['*']['autoconfirmed']    = true;
$wgGroupPermissions['*']['nominornewtalk']   = true;
$wgGroupPermissions['*']['autopatrol']       = true;
$wgGroupPermissions['*']['suppressredirect'] = true;
$wgGroupPermissions['*']['apihighlimits']    = true;
$wgGroupPermissions['*']['writeapi']         = true;
#$wgGroupPermissions['*']['editprotected']    = true; // can edit all protected pages without cascade protection enabled

// Most extra permission abilities go to this group
$wgGroupPermissions['*']['block']            = true;
$wgGroupPermissions['*']['createaccount']    = true;
$wgGroupPermissions['*']['delete']           = true;
$wgGroupPermissions['*']['bigdelete']        = true; // can be separately configured for pages with > $wgDeleteRevisionsLimit revs
$wgGroupPermissions['*']['deletedhistory']   = true; // can view deleted history entries, but not see or restore the text
$wgGroupPermissions['*']['deletedtext']      = true; // can view deleted revision text
$wgGroupPermissions['*']['undelete']         = true;
$wgGroupPermissions['*']['editinterface']    = true;
$wgGroupPermissions['*']['editusercss']      = true;
$wgGroupPermissions['*']['edituserjs']       = true;
$wgGroupPermissions['*']['import']           = true;
$wgGroupPermissions['*']['importupload']     = true;
$wgGroupPermissions['*']['move']             = true;
$wgGroupPermissions['*']['move-subpages']    = true;
$wgGroupPermissions['*']['move-rootuserpages'] = true;
$wgGroupPermissions['*']['patrol']           = true;
$wgGroupPermissions['*']['autopatrol']       = true;
$wgGroupPermissions['*']['protect']          = true;
$wgGroupPermissions['*']['proxyunbannable']  = true;
$wgGroupPermissions['*']['rollback']         = true;
$wgGroupPermissions['*']['upload']           = true;
$wgGroupPermissions['*']['reupload']         = true;
$wgGroupPermissions['*']['reupload-shared']  = true;
$wgGroupPermissions['*']['unwatchedpages']   = true;
$wgGroupPermissions['*']['autoconfirmed']    = true;
$wgGroupPermissions['*']['upload_by_url']    = true;
$wgGroupPermissions['*']['ipblock-exempt']   = true;
$wgGroupPermissions['*']['blockemail']       = true;
$wgGroupPermissions['*']['markbotedits']     = true;
$wgGroupPermissions['*']['apihighlimits']    = true;
$wgGroupPermissions['*']['browsearchive']    = true;
$wgGroupPermissions['*']['noratelimit']      = true;
$wgGroupPermissions['*']['movefile']         = true;
$wgGroupPermissions['*']['unblockself']      = true;
$wgGroupPermissions['*']['suppressredirect'] = true;
#$wgGroupPermissions['*']['mergehistory']     = true;
#$wgGroupPermissions['*']['trackback']        = true;

// Permission to change users' group assignments
$wgGroupPermissions['*']['userrights']  = true;
$wgGroupPermissions['*']['noratelimit'] = true;

##########################################
###### permissions #######################
##########################################