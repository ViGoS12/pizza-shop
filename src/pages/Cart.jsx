import React from 'react'

import AppLayout from '../layouts/AppLayout'
import EmptyCart from '../components/EmptyCart'
import SelectedPizzas from './../components/SelectedPizzas'

export default function Cart() {
  const isEmpty = false
  return <AppLayout>{isEmpty ? <EmptyCart /> : <SelectedPizzas />}</AppLayout>
}
