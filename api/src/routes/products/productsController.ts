import { Request, Response} from 'express'

export function listProducts(req: Request, res: Response) {
    res.send('The list of products')
}

export function getProductById(req: Request, res: Response) {
    res.send('get ProductById')
}

export function createProduct(req: Request, res: Response) {

    console.log(req.body)

    res.send('Create Product')
}

export function updateProduct(req: Request, res: Response) {
    res.send('Update Product')
}

export function deleteProduct(req: Request, res: Response) {
    res.send('Delete Product')
}