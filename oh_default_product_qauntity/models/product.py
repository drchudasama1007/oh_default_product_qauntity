# -*- coding: utf-8 -*-
from odoo import models, fields, api, tools

class SaleOrder(models.Model):

    _inherit = 'product.template'

    website_qauntity = fields.Integer(string="Default Qauntity",default=1)
