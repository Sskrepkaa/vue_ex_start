export const postModule = {
    state: () => ({
        likes: 4,
        posts: [
        ],
        isLoad: false,
        page: 1,
        limit: 10,
        totalPages: 0,
        searchQuery: '',
        selectedSort: 'title',
        sortOptions: [
          {value: 'title', name: 'by name'},
          {value: 'body', name: 'by desc'},
        ]
    }),
    getters: {
        
    },
    mutations: {
        
    },
    actions: {

    },
}