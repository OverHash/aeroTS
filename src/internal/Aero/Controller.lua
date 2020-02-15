local Controller = {}

-- Members
Controller.__index = {
};

-- Statics
Controller.new = function(...)
    return Controller.constructor(setmetatable({}, Controller), ...)
end
Controller.constructor = function(self)
    self._events = {}
    return self
end

return Controller