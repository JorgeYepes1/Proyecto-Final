const MapRouteBreaks = (path, separator = '/') => {

  if (path.substr(0, 1).indexOf(separator) >= 0) {
      return path.substr(1, path.length).split(separator)
  }

  return path.split(separator)
}

export { MapRouteBreaks }
