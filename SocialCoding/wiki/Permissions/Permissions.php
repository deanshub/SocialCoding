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