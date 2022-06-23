import React from 'react'

import EmptyCart from '../components/EmptyCart'
import SelectedPizzas from './../components/SelectedPizzas'
import { useSelector } from 'react-redux'
import { selectCart } from '../redux/slices/cartSlice'

export default function Cart() {
  const { totalPrice } = useSelector(selectCart)
  return <div>{!totalPrice ? <EmptyCart /> : <SelectedPizzas />}</div>
}
