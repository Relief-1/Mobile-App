Ext.regModel('Contact', {
    fields: ['City', 'Country']
});

ListDemo.ListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'Country',
    getGroupString : function(record) {
        return record.get('Country')[0];
    },
    data: [
        { City: "Joplin", Country: "United States", Type: "Tornado" },
        { City: "New Orleans", Country: "United States", Type: "Hurricanne" },
        { City: "Tokyo", Country: "Japan", Type: "Earthquake" },
        { City: "Paris", Country: "France", Type: "Flood" },
        { City: "Van", Country: "Turkey", Type: "Earthquake" },
    ]
});

