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



  function debounceDecoratorNew(func, ms) {
    let timeout;
    let flag = true;
    function wrapper(...args) {
      wrapper.allCount++;
      if (flag) {
        flag = false;
        wrapper.count++;
        func.call(this, ...args);
        }
  
      timeout = setTimeout(() => {
        flag = true;
        wrapper.count++;
        func.call(this, ...args);
      }, ms);
    };
    wrapper.count = 0;
    wrapper.allCount = 0;;
    return wrapper;
  }

  





