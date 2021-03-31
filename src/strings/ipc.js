export const getPrograms = 'programs:get'
export const getProgramsHTML = 'programs:get:html'
export const itemsReady = 'items:ready'
export const renderItem = 'items:render'

export const getSteamUser = 'steam:user:get'
export const isSteamUserExists = 'steam:user:exists'
export const isSteamExists = 'steam:check:exists'
export const getUserAnswer = 'stem:user:answer'
export const disconnectUser = 'user:disconnect'

export const launchProgram = 'program:launch'
export const removeProgram = 'program:remove'
export const removeImageFromProgram = 'program:remove:image'
export const addImageFromProgram = 'program:add:image'

export const openExpandWindow = 'window:open:expand'
export const openSettingWindow = 'window:open:settings'
export const openToolsWindow = 'window:open:tools'
export const openSubWindow = 'window:open:subWindow' // TODO continue this

export const closeExpandWindow = 'window:close:expanded'

export const systemLog = 'console:log'

export const setSetting = 'system:set:setting'
export const setAutoLaunch = 'system:setAutoLaunch'
export const setAlwaysOnTop = 'system:setAlwaysOnTop'
export const getSetting = 'system:get:setting'
export const getAllSettings = 'setting:get:all'
export const getSettingReady = 'setting:ready'
export const disableShutdown = 'system:shutdown:disable'
export const notificationReceived = 'system:notification:received'

export const timerStarted = 'tools:timer:started'
export const timerSetTime = 'tools:timer:set:time'
export const timerFinished = 'tools:timer:finished'
export const timerStopped = 'tools:timer:stopped'
export const timerRequestTime = 'tools:timer:request:time' // send a request from client
export const timerRemainingTime = 'tools:timer:time'

export const moveFile = 'file:move'