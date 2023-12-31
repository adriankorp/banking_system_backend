import debug from 'debug';
import transactionDao from '../daos/transaction.dao';
import { CreateTransactionDto } from '../dtos/create.transaction.dto';

const log: debug.IDebugger = debug('app:transaction-service');

class TransactionService {
    constructor() {
        log('Created new instance of TransactionService');
    }

    async create(resource: CreateTransactionDto) {
        return transactionDao.add(resource);
    }

    async readByIdAndCustomerId(transactionId: number, customerId: string) {
        return transactionDao.getByIdAndCustomerId(transactionId, customerId);
    }

    async listByCustomerId(customerId: string, limit: number, page: number) {
        return transactionDao.getAllByCustomerId(customerId, limit, page);
    }

    async listByAccountNumber(accountNumber: string, limit: number, page: number) {
        return transactionDao.getAllByAccountNumber(accountNumber, limit, page);
    }
}

export default new TransactionService();
