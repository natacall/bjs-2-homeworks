'use strict'

  function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
      let hash = args.join(','); 
      let objectInCache = cache.find(cacheItem => cacheItem.hash === hash); 
      if (objectInCache) {
        console.log('Из кэша: ' + objectInCache.result);
        return 'Из кэша: ' + objectInCache.result;
      }
      let result = func.call(this, ...args);
      console.log('Вычисляем: ' + result);
      cache.push({ hash, result }); 
      if (cache.length > 5) {
        cache.shift() 
      }
      return 'Вычисляем: ' + result;
    }
    return wrapper;
  }

  function debounceDecoratorNew(func) {
    let flag = false;
    let timeout;
    return function(...args) {
      clearTimeout(timeout)
      wrapper.count++;
      if (flag) {
        return;
      }
      const result = func(...args)
      func.call(this, ...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = false,
        func.call(this, ...args)
      });
      result.count = 0;
      return result;
    }
  }

  





