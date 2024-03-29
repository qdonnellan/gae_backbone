app.factory('Folders', function($resource)
{
    return $resource('api/:id',
            { id: '@id' },
            {
              list: { method: 'GET' , isArray: true }, //same as query
              create: { method: 'POST' }, // same as save
              update: { method: 'PUT' }
              // DEFAULT IMPLEMENTATION OF $RESOURCE
              //   'get':    {method:'GET'},
              //   'save':   {method:'POST'},
              //   'query':  {method:'GET', isArray:true},
              //   'remove': {method:'DELETE'},
              //   'delete': {method:'DELETE'}
            });
});