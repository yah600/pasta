import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DollarSign, Receipt, CreditCard, BarChart2, ArrowRight } from 'lucide-react';
import { mockBills } from '@/data/mock-bills';
import { mockPayments } from '@/data/mock-payments';

const Finance = () => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('finance'), href: '/finance' },
  ];

  // Calculate summary data
  const outstandingBills = mockBills.filter(bill => bill.status === 'Due' || bill.status === 'Overdue' || bill.status === 'Pending Approval');
  const totalOutstandingAmount = outstandingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const overdueBillsCount = mockBills.filter(bill => bill.status === 'Overdue').length;
  const totalPayments = mockPayments.length;
  const totalPaymentsAmount = mockPayments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <BreadcrumbNav items={breadcrumbItems} />
      <h1 className="text-2xl font-semibold md:text-3xl text-page-title">{t('finance')} Overview</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Outstanding Bills Card */}
        <Card className="card-rovida">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-rovida-navy">Outstanding Bills</CardTitle>
            <Receipt className="h-4 w-4 text-rovida-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rovida-near-black">{totalOutstandingAmount.toFixed(2)} CAD</div>
            <p className="text-xs text-rovida-slate-green-gray">{outstandingBills.length} bills pending</p>
            <Link to="/finance/bills" className="mt-2 inline-flex items-center text-sm link-rovida">
              View Bills <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Overdue Bills Card */}
        <Card className="card-rovida">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-rovida-navy">Overdue Bills</CardTitle>
            <DollarSign className="h-4 w-4 text-rovida-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rovida-near-black">{overdueBillsCount}</div>
            <p className="text-xs text-rovida-slate-green-gray">Action required</p>
            <Link to="/finance/bills" className="mt-2 inline-flex items-center text-sm link-rovida">
              View Overdue <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Total Payments Card */}
        <Card className="card-rovida">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-rovida-navy">Total Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-rovida-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rovida-near-black">{totalPaymentsAmount.toFixed(2)} CAD</div>
            <p className="text-xs text-rovida-slate-green-gray">{totalPayments} payments recorded</p>
            <Link to="/finance/payments" className="mt-2 inline-flex items-center text-sm link-rovida">
              View Payments <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Financial Reports Card */}
        <Card className="card-rovida">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-rovida-navy">Financial Reports</CardTitle>
            <BarChart2 className="h-4 w-4 text-rovida-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rovida-near-black">Generate Reports</div>
            <p className="text-xs text-rovida-slate-green-gray">Access detailed financial analytics.</p>
            <Link to="/finance/reports" className="mt-2 inline-flex items-center text-sm link-rovida">
              Go to Reports <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm card-rovida mt-4 p-8">
        <p className="text-rovida-slate-green-gray">Detailed financial dashboards and charts coming soon!</p>
      </Card>
    </div>
  );
};

export default Finance;