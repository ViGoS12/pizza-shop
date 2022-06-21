import React from 'react'

import AppLayout from '../layouts/AppLayout'
import EmptyCart from '../components/EmptyCart'
import SelectedPizzas from './../components/SelectedPizzas'
import { useSelector } from 'react-redux'

export default function Cart() {
  const { totalPrice } = useSelector((state) => state.cart)
  return (
    <AppLayout>{!totalPrice ? <EmptyCart /> : <SelectedPizzas />}</AppLayout>
  )
}
