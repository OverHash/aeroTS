local Service = {}

-- Members
Service.__index = {
};

-- Statics
Service.new = function(...)
    return Service.constructor(setmetatable({}, Service), ...)
end
Service.constructor = function(self)
    self._events = {}
    return self
end

return Service