import logic from '../logic/index'

describe('logic' , () => {
    describe('toogleItems' , () => {
        it('should succed when list dont have this item' , () => {

            const item = {
                name : 'Xhekpon® crema facial 40ml',
                price : 6.49,
                img: '/images/xhekpon-crema.jpg',
                id: '2'
            }
            const list = []
            const actualPrice = []

            logic.toogleItems(item,list,actualPrice)     
                expect(list).toBeDefined()
                expect(list instanceof Array).toBeTruthy()
                expect(list.length).toBeGreaterThan(0)
        })

        it('should succed when list have this item' , () => {
            const item = {
                name : 'Xhekpon® crema facial 40ml',
                price : 6.49,
                img: '/images/xhekpon-crema.jpg',
                id: '2'
            }
            const list = [{
                name : 'Xhekpon® crema facial 40ml',
                price : 6.49,
                img: '/images/xhekpon-crema.jpg',
                id: '2'
            }]
            const actualPrice = []
    
            logic.toogleItems(item,list,actualPrice)     
                expect(list).toBeDefined()
                expect(list instanceof Array).toBeTruthy()
                !(expect(list.length).toBeGreaterThan(0))
        })

        it('should fail when item is undefined' , () => {
            const item = {
                name : 'Xhekpon® crema facial 40ml',
                price : 6.49,
                img: '/images/xhekpon-crema.jpg',
                id: '2'
            }
            const list = undefined
            const actualPrice = []
            expect(() => logic.toogleItems(item,list,actualPrice)).toThrowError(`${list} is not an Array`)
        })

        it('should fail when list is undefined' , () => {
            const item = undefined
            const list = []
            const actualPrice = []
            expect(() => logic.toogleItems(item,list,actualPrice)).toThrowError(`${item} is not a Object`)
        })

        it('should fail when actualprice is undefined' , () => {
            const item = {
                name : 'Xhekpon® crema facial 40ml',
                price : 6.49,
                img: '/images/xhekpon-crema.jpg',
                id: '2'
            }
            const list = []
            const actualPrice = undefined
            expect(() => logic.toogleItems(item,list,actualPrice)).toThrowError(`${actualPrice} is not an Array`)
        })
    })
})