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
    
    return function wrapper(...args) {
      wrapper.count++;
      if (flag) {
        return;
      }
      func.call(this, ...args);
      flag = true;
      setTimeout(() => {
        flag = false;
        wrapper.count++;
        func.call(this, ...args)
      });
      wrapper.count = 0;
      return wrapper;
    }
  }






