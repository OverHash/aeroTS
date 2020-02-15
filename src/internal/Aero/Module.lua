local Module = {}

-- Members
Module.__index = {
};

-- Statics
Module.new = function(...)
    return Module.constructor(setmetatable({}, Module), ...)
end
Module.constructor = function(self)
    self._events = {}
    return self
end

return Module