class Volantino {

    constructor(id, title, start_date, end_date, is_published, retailer, category) {
        this.id = id;
        this.title = title;
        this.start_date = start_date;
        this.end_date = end_date;
        this.is_published = is_published;
        this.retailer = retailer;
        this.category = category;
    }

    getJSONObject() {
        return ({
            'id': this.id,
            'title': this.title,
            'start_date': this.start_date,
            'end_date': this.end_date,
            'is_published': this.is_published,
            'retailer': this.retailer,
            'category': this.category
        })
    }




}
module.exports.Volantino = Volantino;