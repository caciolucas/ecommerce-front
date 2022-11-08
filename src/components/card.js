import {Card} from "primereact/card";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";
import {useState} from "react";
import {InputNumber} from "primereact/inputnumber";

function generatePriceSubtitle(value, discount){
    if(discount){
        let discountValue = value * (discount / 100);
        let subtitle = <span style={{textDecoration: 'line-through', color: '#ff0000a6'}}>{formatCurrency(value)}</span>;
        let subtitleDiscount = <span style={{fontWeight: 'bolder'}}>{formatCurrency(value - discountValue)}</span>;
        return [subtitle, ' ', subtitleDiscount];
    }
    return <div>{formatCurrency(value)}</div>


}
function formatCurrency(value) {
    if (value) return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProductImageHeader(image) {
    return (
        <div>
            <img src={image.product_image}  />
            <p className="text-center">{image.description}</p>
        </div>

    )
}
function ProductCard(product) {
    let [fullDescription, setFullDescription] = useState(false);
    let [amount, setAmount] = useState(0);
    const header = (
        <Carousel value={product.images_display} itemTemplate={ProductImageHeader} showIndicators={false}></Carousel>
    );
    const footer = (
        <span className="flex justify-content-between">
            <InputNumber inputId="horizontal" value={amount} onValueChange={(e) => setAmount(e.value)} showButtons buttonLayout="horizontal"
                         incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" size="1" min="1"/>

            <Button label="Adicionar" icon="pi pi-cart-plus" className="p-button-rounded p-button-outlined p-button-success" />
        </span>
    );
    return (
        <Card title={product.name} subTitle={generatePriceSubtitle(product.price, product.discount)} style={{ width: '25em' }} footer={footer} header={header}>
            <p
                className="m-0"
                style={
                    fullDescription ? {textAlign:'justify'} : {overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign:'justify'}
                }>
                {product.description}
            </p>
            <p style={{cursor: 'pointer', color: 'blue'}} onClick={() => setFullDescription(!fullDescription)}>
                {fullDescription ? 'Ver menos' : 'Ver mais'}

            </p>

        </Card>
    );
}
export default ProductCard;
