import ProductCard from "../components/card";

function ProductList() {

    const products = [
        {
            "id": "cae16bc7-d075-48e9-8136-6739e8ebf8ba",
            "images_display": [
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
            ],
            "created_at": "2022-11-02T13:12:14.064775Z",
            "updated_at": "2022-11-02T13:12:14.064829Z",
            "name": "Produto A",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim mauris in nunc mattis, id lobortis purus iaculis. Nullam cursus orci vel tempor fringilla. Phasellus porttitor dui massa, sit amet sagittis eros tempus et. Vestibulum in lacus ante. Etiam sollicitudin odio nec congue fringilla. Morbi mollis libero quis blandit venenatis. Nullam ornare dui tellus. Nulla facilisi.\r\n\r\nPraesent vulputate magna non lectus iaculis, vel molestie est iaculis. Nulla efficitur, dolor in pulvinar pharetra, ligula felis tincidunt libero, quis dapibus libero neque ac metus. Praesent ac magna mauris. Maecenas id purus et metus euismod pellentesque. In consequat sit amet arcu sed rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nulla id leo molestie, at euismod sem rutrum. Duis ac nulla ut orci porttitor lobortis. Sed egestas justo nec porta maximus. Quisque placerat a odio non maximus. Fusce quam magna, pellentesque id ornare ut, vulputate at felis. Mauris a nibh eget ante vulputate euismod in ut diam. Mauris condimentum vulputate convallis. Curabitur ultricies sollicitudin dolor, eget sagittis quam aliquet sit amet. In in hendrerit metus.",
            "price": "999.00",
            "discount": 10
        },
        {
            "id": "cae16bc7-d075-48e9-8136-6739e8ebf8ba",
            "images_display": [
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
            ],
            "created_at": "2022-11-02T13:12:14.064775Z",
            "updated_at": "2022-11-02T13:12:14.064829Z",
            "name": "Produto A",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim mauris in nunc mattis, id lobortis purus iaculis. Nullam cursus orci vel tempor fringilla. Phasellus porttitor dui massa, sit amet sagittis eros tempus et. Vestibulum in lacus ante. Etiam sollicitudin odio nec congue fringilla. Morbi mollis libero quis blandit venenatis. Nullam ornare dui tellus. Nulla facilisi.\r\n\r\nPraesent vulputate magna non lectus iaculis, vel molestie est iaculis. Nulla efficitur, dolor in pulvinar pharetra, ligula felis tincidunt libero, quis dapibus libero neque ac metus. Praesent ac magna mauris. Maecenas id purus et metus euismod pellentesque. In consequat sit amet arcu sed rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nulla id leo molestie, at euismod sem rutrum. Duis ac nulla ut orci porttitor lobortis. Sed egestas justo nec porta maximus. Quisque placerat a odio non maximus. Fusce quam magna, pellentesque id ornare ut, vulputate at felis. Mauris a nibh eget ante vulputate euismod in ut diam. Mauris condimentum vulputate convallis. Curabitur ultricies sollicitudin dolor, eget sagittis quam aliquet sit amet. In in hendrerit metus.",
            "price": "999.00",
            "discount": 10
        },
        {
            "id": "cae16bc7-d075-48e9-8136-6739e8ebf8ba",
            "images_display": [
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
            ],
            "created_at": "2022-11-02T13:12:14.064775Z",
            "updated_at": "2022-11-02T13:12:14.064829Z",
            "name": "Produto A",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim mauris in nunc mattis, id lobortis purus iaculis. Nullam cursus orci vel tempor fringilla. Phasellus porttitor dui massa, sit amet sagittis eros tempus et. Vestibulum in lacus ante. Etiam sollicitudin odio nec congue fringilla. Morbi mollis libero quis blandit venenatis. Nullam ornare dui tellus. Nulla facilisi.\r\n\r\nPraesent vulputate magna non lectus iaculis, vel molestie est iaculis. Nulla efficitur, dolor in pulvinar pharetra, ligula felis tincidunt libero, quis dapibus libero neque ac metus. Praesent ac magna mauris. Maecenas id purus et metus euismod pellentesque. In consequat sit amet arcu sed rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nulla id leo molestie, at euismod sem rutrum. Duis ac nulla ut orci porttitor lobortis. Sed egestas justo nec porta maximus. Quisque placerat a odio non maximus. Fusce quam magna, pellentesque id ornare ut, vulputate at felis. Mauris a nibh eget ante vulputate euismod in ut diam. Mauris condimentum vulputate convallis. Curabitur ultricies sollicitudin dolor, eget sagittis quam aliquet sit amet. In in hendrerit metus.",
            "price": "999.00",
            "discount": 10
        },

        {
            "id": "cae16bc7-d075-48e9-8136-6739e8ebf8ba",
            "images_display": [
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
                {
                    "id": "1741781e-3312-49db-8825-a0f72cbed7f9",
                    "created_at": "2022-11-02T13:12:49.951269Z",
                    "updated_at": "2022-11-02T13:12:49.951311Z",
                    "product_image": "https://ecommerce-app-clucas.s3.amazonaws.com/media/pexels-photo-90946.webp",
                    "description": "Uma imagem do produto"
                },
            ],
            "created_at": "2022-11-02T13:12:14.064775Z",
            "updated_at": "2022-11-02T13:12:14.064829Z",
            "name": "Produto A",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim mauris in nunc mattis, id lobortis purus iaculis. Nullam cursus orci vel tempor fringilla. Phasellus porttitor dui massa, sit amet sagittis eros tempus et. Vestibulum in lacus ante. Etiam sollicitudin odio nec congue fringilla. Morbi mollis libero quis blandit venenatis. Nullam ornare dui tellus. Nulla facilisi.\r\n\r\nPraesent vulputate magna non lectus iaculis, vel molestie est iaculis. Nulla efficitur, dolor in pulvinar pharetra, ligula felis tincidunt libero, quis dapibus libero neque ac metus. Praesent ac magna mauris. Maecenas id purus et metus euismod pellentesque. In consequat sit amet arcu sed rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nulla id leo molestie, at euismod sem rutrum. Duis ac nulla ut orci porttitor lobortis. Sed egestas justo nec porta maximus. Quisque placerat a odio non maximus. Fusce quam magna, pellentesque id ornare ut, vulputate at felis. Mauris a nibh eget ante vulputate euismod in ut diam. Mauris condimentum vulputate convallis. Curabitur ultricies sollicitudin dolor, eget sagittis quam aliquet sit amet. In in hendrerit metus.",
            "price": "999.00",
            "discount": 10
        },
    ]
    return (
        <div className="grid">
            {products.map((product) => (
                <div className="col-12 lg:col-6 xl:col-3">
                    {ProductCard(product)}
                </div>
            ))}
        </div>

    )
}


export default ProductList;
